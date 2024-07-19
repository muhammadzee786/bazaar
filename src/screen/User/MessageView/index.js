import React from 'react'
import { Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import { LightStatusBar } from '@component/StatusBar'
import Header from '@component/Header'
import { TextInput, Button } from '@component/Form'

import theme from '@theme/styles'
import styles from './styles'
import Placeholder from './Placeholder'
import Unavailable from '@component/Section/Unavailable'
import { bind } from '@utility/component'
import http from '@utility/http'
import { URLS } from '@config/url'
import { COLOR } from '@theme/typography'
import { compile } from 'path-to-regexp'
import List from './List'
import Top from './Top'
import Bottom from './Bottom'
import lodashReverse from 'lodash/reverse'
import NoAuth from '@component/Section/User/Auth/NoAuth'
import { __ } from '@utility/translation'

class MessageViewUI extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingThread: true,
      thread: {},
      threadError: false,
      fetchingMessages: true,
      messages: []
    }

    bind(this)

    this.fetchThread = this.fetchThread.bind(this)
    this.fetchMessages = this.fetchMessages.bind(this)
    this.onMessageSent = this.onMessageSent.bind(this)
    this.renderView = this.renderView.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  async componentDidMount () {
    await this.fetchThread()
    await this.fetchMessages()
  }

  async fetchThread () {
    await this.promisedSetState({
      fetchingThread: true
    })
    try {
      const params = {
        embed: 'post'
      }
      const r = (await http.get(URLS.THREADS + '/' + this.props.route.params.id, { params })).data

      await this.promisedSetState({
        thread: r.result
      })
    } catch (e) {
      await this.promisedSetState({
        threadError: true
      })
    }
    await this.promisedSetState({
      fetchingThread: false
    })
  }

  async fetchMessages () {
    if (this.state.threadError) {
      return
    }
    await this.promisedSetState({
      fetchingMessages: true
    })
    try {
      const params = {
      }
      const url = compile(URLS.THREAD_MESSAGES)({ id: this.props.route.params.id })
      const r = (await http.get(url, { params })).data

      if (r.result?.data?.length) {
        await this.promisedSetState({
          messages: lodashReverse(r.result.data)
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingMessages: false
    })
  }

  async onMessageSent (message) {
    await this.promisedSetState({
      messages: [...this.state.messages, message]
    })
  }

  renderView () {
    return (
      <View style={styles.chat}>
        <Top
          thread={this.state.thread}
        />
        <List
          list={this.state.messages}
          session={this.props.session}
        />
        <Bottom
          thread={this.state.thread}
          session={this.props.session}
          onMessageSent={this.onMessageSent}
        />
      </View>
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
    return <Unavailable message={__('Message is not available')} />
  }

  render () {
    let content
    if (this.state.threadError) {
      content = this.renderError()
    } else if (this.state.fetchingThread) {
      content = this.renderLoading()
    } else {
      content = this.renderView()
    }

    return (
      <Container>
        <LightStatusBar />
        {this.renderHeader()}
        <Content style={theme.layout}>
          {content}
        </Content>
      </Container>
    )
  }
}

const MessageView = (props) => {
  return props.session.isLoggedIn ? <MessageViewUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(MessageView)
