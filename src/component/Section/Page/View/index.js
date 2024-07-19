import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modalbox'
import { MarkdownView } from 'react-native-markdown-view'

import styles from './styles'
import Support from '@component/Support'
import { Button, Icon } from '@component/Basic'
import { bind } from '@utility/component'
import { URLS } from '@config/url'
import http from '@utility/http'
import { pageIds } from '@config/page'

class PageView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      pageId: '',
      pageType: '',
      page: {}
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.fetchPage = this.fetchPage.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  async open (pageId) {
    await this.promisedSetState({
      pageId,
      pageType: pageIds[pageId] || '-',
      page: {}
    })
    await this.fetchPage()
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  async fetchPage () {
    await Support.showLoading()
    try {
      const params = {
        languageCode: 'en',
        resourceTypeID: '11',
        generalType: this.state.pageType
      }
      const r = (await http.get(URLS.POST, { params })).data
      if (r.records) {
        await this.promisedSetState({
          page: r.records[0]
        })
      }
    } catch (e) {
      this.close()
    }
    await Support.hideLoading()
  }

  renderNodeHeading () {
    const element = ({ level, content, state }, output) => {
      if (level == 1) {
        return (
          <View style={styles.header}>
            <View style={styles.headerLine} />
            <Text style={styles.headerTitle}>{typeof content === 'string' ? content : output(content, state)}</Text>
          </View>
        )
      } else if (level == 2) {
        return (
          <View style={styles.header}>
            <Text style={styles.headerSubTitle}>{typeof content === 'string' ? content : output(content, state)}</Text>
          </View>
        )
      }

      return null
    }
    const render = (node, output, state, styles) => element(node, output)

    return { render }
  }

  renderNodeParagraph () {
    const renderText = ({ level, content, state }, output) => {
      return (
        <View style={styles.content}>
          <View>
            <Text style={styles.desc}>{typeof content === 'string' ? content : output(content, state)}</Text>
          </View>
        </View>
      )
    }

    const render = (node, output, state, styles) => {
      if (node.content instanceof Array && node.content.length === 1 && node.content[0].type === 'image') {
        return null
      } else {
        return renderText(node, output, state, styles)
      }
    }

    return { render }
  }

  renderContent () {
    return (
      <>
        <View style={styles.modalClose}>
          <Button style={styles.modalCloseBtn} onPress={this.close}>
            <Icon name='close' type='AntDesign' style={styles.modalCloseBtnIcon} />
          </Button>
        </View>
        <Text style={styles.modalHeader}>{this.state.page.title}</Text>

        <MarkdownView
          rules={{
            heading: this.renderNodeHeading(),
            paragraph: this.renderNodeParagraph()
          }}
        >
          {this.state.page.description}
        </MarkdownView>
      </>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='center'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default PageView
