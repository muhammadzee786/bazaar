import React, { memo } from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'
import { Container, Content, Text } from '@component/Basic'
import RenderHtml from 'react-native-render-html'

import Header from '@component/Header'
import theme from '@theme/styles'
import styles from './styles'
import { LightStatusBar } from '@component/StatusBar'
import Placeholder from './Placeholder'
import Unavailable from '@component/Section/Unavailable'
import { bind } from '@utility/component'
import http from '@utility/http'
import { URLS } from '@config/url'
import { __ } from '@utility/translation'

const tagsStyles = {
  body: {
    whiteSpace: 'normal',
    color: '#333',
    fontSize: 14,
    lineHeight: 22
  },
  li: {
    marginBottom: 15
  },
  p: {
    marginTop: 0,
    marginBottom: 15
  },
  strong: {
    margin: 0
  },
  a: styles.htmlTagA,
  b: styles.htmlTagB
}

const HtmlContent = memo(({ html }) => {
  const { width } = useWindowDimensions()
  const source = {
    html
  }
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagsStyles}
    />
  )
})

class PageView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      slug: this.props.route?.params?.slug || '',
      fetchingPage: true,
      page: {},
      pageError: false
    }

    bind(this)

    this.fetchPage = this.fetchPage.bind(this)
    this.renderView = this.renderView.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  async componentDidMount () {
    await this.fetchPage()
  }

  async fetchPage () {
    await this.promisedSetState({
      fetchingPage: true
    })
    try {
      const r = (await http.get(URLS.PAGES + '/' + this.props.route.params.slug)).data

      await this.promisedSetState({
        page: r.result
      })
    } catch (e) {
      await this.promisedSetState({
        pageError: true
      })
    }
    await this.promisedSetState({
      fetchingPage: false
    })
  }

  renderView () {
    return (
      <ScrollView style={styles.pageContent}>
        <HtmlContent html={this.state.page.content} />
      </ScrollView>
    )
  }

  renderHeader () {
    return (
      <Header
        variant='secondary'
        leftType='backarrow'
      />
    )
  }

  renderLoading () {
    return <Placeholder />
  }

  renderError () {
    return <Unavailable message={__('Page is not available')} />
  }

  render () {
    let content
    if (this.state.pageError) {
      content = this.renderError()
    } else if (this.state.fetchingPage) {
      content = this.renderLoading()
    } else {
      content = this.renderView()
    }

    return (
      <Container>
        <LightStatusBar />
        {this.renderHeader()}
        <Content style={theme.layout}>
          <View style={styles.pageHeader}>
            <Text style={styles.pageHeaderTitle}>{this.state.page?.title}</Text>
          </View>
          {content}
        </Content>
      </Container>
    )
  }
}

export default PageView
