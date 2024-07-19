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
import Support from '@component/Support'
import NoAuth from '@component/Section/User/Auth/NoAuth'

class FavouriteListUI extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
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
      const params = {
        embed: 'post,pictures'
      }
      const r = (await http.get(URLS.SAVED_POSTS, { params })).data
      const posts = r.result.data
      await this.promisedSetState({ posts, total: r.result.meta.total })
    } catch (e) {
    }
    await this.promisedSetState({
      fetching: false
    })
  }

  async onDelete (id, index) {
    const fav = this.state.posts[index]
    if (!fav) {
      return
    }
    const deletion = async () => {
      await Support.showLoading()
      try {
        const r = (await http.delete(URLS.SAVED_POSTS + '/' + fav.post.id)).data

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
        <Header
          default
          leftType='back'
        />
        <Content style={theme.layout}>
          <ScrollView>

            <View style={theme.header}>
              <View style={theme.headerCol}>
                <Icon name='bookmarks-outline' type='Ionicons' style={theme.headerIcon} />
                <Text style={theme.headerTitle}>{__('Favourite listings')}</Text>
              </View>
              <View style={theme.headerCol2}>
                <Text style={theme.headerCount}>{this.state.total}</Text>
              </View>
            </View>

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

const FavouriteList = (props) => {
  return props.session.isLoggedIn ? <FavouriteListUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(FavouriteList)
