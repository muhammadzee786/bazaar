import React from 'react'
import { Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import { LightStatusBar } from '@component/StatusBar'
import Header from '@component/Header'
import { TextInput, Button } from '@component/Form'

import { __ } from '@utility/translation'
import theme from '@theme/styles'
import styles from './styles'
import { COLOR } from '@theme/typography'
import { navigate, navigateCurrent } from '@navigation/'
import http from '@utility/http'
import { bind } from '@utility/component'
import Support from '@component/Support'
import { URLS } from '@config/url'
import List from './List'
import { deleteMessage, updateImportantMessage } from '@helper/message'
import NoAuth from '@component/Section/User/Auth/NoAuth'

const tabs = [
  {
    id: 'inbox',
    title: 'Inbox'
  },
  {
    id: 'unread',
    title: 'Unread'
  },
  {
    id: 'started',
    title: 'Started'
  },
  {
    id: 'important',
    title: 'Important'
  }
]

class MessageListUI extends React.Component {
  constructor (props) {
    super(props)

    let currentTab
    if (this.props.route.params.tab) {
      currentTab = tabs.find(r => (r.id == this.props.route.params.tab))
    }
    if (!currentTab) {
      currentTab = tabs[0]
    }

    this.state = {
      tabs,
      currentTab,
      threads: [],
      fetching: true,
      total: 0
    }

    bind(this)

    this.changeTab = this.changeTab.bind(this)
    this.fetchThreads = this.fetchThreads.bind(this)
    this.onImportant = this.onImportant.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.renderTab = this.renderTab.bind(this)
    this.renderTabs = this.renderTabs.bind(this)
  }

  async componentDidMount () {
    await this.fetchThreads()
  }

  changeTab (tab) {
    if (tab.id != this.state.currentTab?.id) {
      navigateCurrent('UserMessageList', { tab: tab.id })
    }
  }

  async fetchThreads () {
    try {
      const params = {
        filter: '',
        embed: 'post'
      }
      if (this.state.currentTab?.id != 'inbox') {
        params.filter = this.state.currentTab?.id
      }
      const r = (await http.get(URLS.THREADS, { params })).data
      const threads = r.result?.data || []
      await this.promisedSetState({ threads, total: threads.length })
    } catch (e) {
    }
    await this.promisedSetState({
      fetching: false
    })
  }

  async onImportant (index, id, isImportant) {
    const b = await updateImportantMessage(id, !isImportant)
    if (b) {
      const threads = [...this.state.threads]
      if (threads[index]) {
        threads[index].p_is_important = !isImportant
      }
      await this.promisedSetState({
        threads
      })
    }
  }

  async onDelete (index, id) {
    deleteMessage(id, async (success) => {
      if (success) {
        const threads = [...this.state.threads]
        threads.splice(index, 1)
        await this.promisedSetState({
          threads,
          total: (this.state.total - 1) || 0
        })
      }
    })
  }

  renderTab (tab) {
    const selected = tab.id == this.state.currentTab?.id
    const mainStyle = [styles.msgTab]
    const textStyle = [styles.msgTabText]
    if (selected) {
      mainStyle.push(styles.msgTabSelected)
      textStyle.push(styles.msgTabSelectedText)
    }
    const onPress = () => this.changeTab(tab)
    return (
      <Button style={mainStyle} onPress={onPress}>
        <Text style={textStyle}>{__(tab.title)}</Text>
      </Button>
    )
  }

  renderTabs () {
    return (
      <View style={styles.msgTabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator>
          {this.state.tabs.map(this.renderTab)}
        </ScrollView>
      </View>
    )
  }

  render () {
    return (
      <Container>
        <LightStatusBar />
        <Header
          variant='secondary'
          leftType='backarrow'
        />
        <Content style={theme.layout}>
          <View style={styles.msg}>
            <View style={styles.msgHeader}>
              <View style={styles.msgRow}>
                <Text style={styles.msgHeaderTitle}>{__('Messages')}</Text>
              </View>
              <View style={styles.msgRow}>
                <Text style={styles.msgHeaderDesc}>{__('Read & Write Messages')}</Text>
              </View>
            </View>
            {this.renderTabs()}
            <View style={styles.msgContent}>
              <List
                fetching={this.state.fetching}
                list={this.state.threads}
                onImportant={this.onImportant}
                onDelete={this.onDelete}
              />
            </View>
          </View>

        </Content>
      </Container>
    )
  }
}

const MessageList = (props) => {
  return props.session.isLoggedIn ? <MessageListUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(MessageList)
