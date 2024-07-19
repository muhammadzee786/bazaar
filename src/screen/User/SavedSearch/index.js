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
import NoAuth from '@component/Section/User/Auth/NoAuth'

class SavedSearchUI extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      savedSearches: [],
      fetching: true,
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
      const r = (await http.get(URLS.SAVED_SEARCHES)).data
      const savedSearches = r.result?.data || []
      await this.promisedSetState({ savedSearches, total: savedSearches.length })
    } catch (e) {
    }
    await this.promisedSetState({
      fetching: false
    })
  }

  async onDelete (id, index) {
    const deletion = async () => {
      await Support.showLoading()
      try {
        const r = (await http.delete(URLS.SAVED_SEARCHES + '/' + id)).data

        if (r.success) {
          const savedSearches = [...this.state.savedSearches]
          savedSearches.splice(index, 1)
          await this.promisedSetState({
            savedSearches,
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
                <Icon name='bell' type='SimpleLineIcons' style={theme.headerIcon} />
                <Text style={theme.headerTitle}>{__('Saved Search')}</Text>
              </View>
              <View style={theme.headerCol2}>
                <Text style={theme.headerCount}>{this.state.total}</Text>
              </View>
            </View>

            <List
              list={this.state.savedSearches}
              fetching={this.state.fetching}
              onDelete={this.onDelete}
            />

          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const SavedSearch = (props) => {
  return props.session.isLoggedIn ? <SavedSearchUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(SavedSearch)
