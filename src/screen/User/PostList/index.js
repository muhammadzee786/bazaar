import React from 'react'
import { Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import Header from '@component/Header'
import { TextInput, Button } from '@component/Form'

import { __ } from '@utility/translation'
import theme from '@theme/styles'
import styles from './styles'

import { DarkStatusBar } from '@component/StatusBar'
import request from '@utility/request'
import { bind } from '@utility/component'

import List from './List'

import { URLS } from '@config/url'
import http from '@utility/http'
import { navigate } from '@navigation'
import Support from '@component/Support'
import NoAuth from '@component/Section/User/Auth/NoAuth'

const postTypes = {
  myad: {
    title: 'My Ads',
    params: {}
  },
  pending: {
    title: 'Pending Approval',
    params: {
      pendingApproval: true
    }
  },
  archived: {
    title: 'Archived Listings',
    params: {
      archived: true
    }
  }
}

class PostListUI extends React.Component {
  constructor (props) {
    super(props)

    let type = 'myad'
    if (
      this.props.route.params?.type &&
      postTypes[this.props.route.params.type]
    ) {
      type = this.props.route.params.type
    }

    this.state = {
      type,
      fetching: true,
      posts: [],
      total: 0
    }

    bind(this)

    this.fetchPosts = this.fetchPosts.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  async componentDidMount () {
    await this.fetchPosts()
  }

  async fetchPosts () {
    try {
      let xparams = {}
      if (postTypes[this.state.type]) {
        xparams = postTypes[this.state.type].params
      }
      const params = {
        logged: true,
        ...xparams,
        embed: 'category,city,pictures,latestPayment,package'
      }
      const r = (await http.get(URLS.POSTS, { params })).data
      const posts = r.result.data
      await this.promisedSetState({ posts, total: r.result.meta.total })
    } catch (e) {}
    await this.promisedSetState({
      fetching: false
    })
  }

  async onDelete (id, index) {
    const deletion = async () => {
      await Support.showLoading()
      try {
        const r = (await http.delete(URLS.POSTS + '/' + id)).data

        if (r.success) {
          const posts = [...this.state.posts]
          posts.splice(index, 1)
          await this.promisedSetState({
            posts,
            total: (this.state.total - 1) || 0
          })
        }
      } catch (e) {
        await Support.showServerError(e)
      }
      await Support.hideLoading()
    }
    Support.showConfirm({
      title: __('Delete'),
      message: __('Are you sure you want to delete this?'),
      onYes: () => deletion()
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' />
        <Content style={theme.layout}>
          <ScrollView>
            <View style={theme.header}>
              <View style={theme.headerCol}>
                <Icon
                  name='megaphone'
                  type='Entypo'
                  style={theme.headerIcon}
                />
                <Text style={theme.headerTitle}>
                  {__(postTypes[this.state.type].title)}
                </Text>
              </View>
              <View style={theme.headerCol2}>
                <Text style={theme.headerCount}>{this.state.total}</Text>
              </View>
            </View>

            <Button style={styles.createBtn} onPress={() => navigate('UserPostCreate')}>
              <Icon name='plus' type='Feather' style={styles.createBtnIcon} />
              <Text style={styles.createBtnText}>{__('Create Ad')}</Text>
            </Button>

            <List
              list={this.state.posts}
              fetching={this.state.fetching}
              onDelete={this.onDelete}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const PostList = (props) => {
  return props.session.isLoggedIn ? <PostListUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(PostList)
