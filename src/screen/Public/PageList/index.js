import React from 'react'
import { ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import Header from '@component/Header'
import { __ } from '@utility/translation'
import theme from '@theme/styles'
import { DarkStatusBar } from '@component/StatusBar'
import { bind } from '@utility/component'
import { URLS } from '@config/url'
import http from '@utility/http'
import Support from '@component/Support'

import List from './List'

class PageList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pages: [],
      fetching: true
    }

    bind(this)

    this.fetchPages = this.fetchPages.bind(this)
  }

  async componentDidMount () {
    await this.fetchPages()
  }

  async fetchPages () {
    try {
      const r = (await http.get(URLS.PAGES)).data
      const pages = r.result?.data || []
      await this.promisedSetState({ pages, total: pages.length })
    } catch (e) {
    }
    await this.promisedSetState({
      fetching: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
        />
        <Content style={theme.layout}>
          <ScrollView>
            <View style={theme.header}>
              <View style={theme.headerCol}>
                <Icon name='document-text-outline' type='Ionicons' style={theme.headerIcon} />
                <Text style={theme.headerTitle}>{__('Pages')}</Text>
              </View>
            </View>

            <List
              list={this.state.pages}
              fetching={this.state.fetching}
            />

          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(PageList)
