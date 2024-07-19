import React from 'react'
import { Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import Header from '@component/Header'
import Footer from '@component/Footer'
import { TextInput, Button } from '@component/Form'

import { __ } from '@utility/translation'
import theme from '@theme/styles'
import styles from './styles'

import { DarkStatusBar } from '@component/StatusBar'
import request from '@utility/request'
import { bind } from '@utility/component'

import Category from './Category'
import City from './City'
import Sponsored from './Sponsored'
import Latest from './Latest'

import { URLS } from '@config/url'
import http from '@utility/http'
import { navigate } from '@navigation/'
import { addToFavourite, refinePost, removeFromFavourite } from '@helper/post'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingCategories: true,
      categories: [],
      fetchingSponsoredPosts: true,
      sponsoredPosts: [],
      fetchingLatestPosts: true,
      latestPosts: [],
      fetchingCities: true,
      cities: []
    }

    bind(this)

    this.fetchSection = this.fetchSection.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.toggleFavourite = this.toggleFavourite.bind(this)
  }

  async componentDidMount () {
    await this.fetchSection()
  }

  async fetchSection () {
    try {
      const r = (await http.get(URLS.HOME_SECTIONS)).data
      const data = r.result.data

      let categories = []
      if (data?.getCategories?.data?.categories) {
        categories = data.getCategories.data.categories
        if (typeof categories === 'object' && !Array.isArray(categories)) {
          categories = Object.values(categories)
        }
      }

      let sponsoredPosts = []
      if (data?.getPremiumListings?.data?.premium?.posts?.length) {
        sponsoredPosts = data.getPremiumListings.data.premium.posts
        if (
          typeof sponsoredPosts === 'object' &&
          !Array.isArray(sponsoredPosts)
        ) {
          sponsoredPosts = Object.values(sponsoredPosts)
        }
      }

      let latestPosts = []
      if (data?.getLatestListings?.data?.latest?.posts?.length) {
        latestPosts = data.getLatestListings.data.latest.posts
        if (typeof latestPosts === 'object' && !Array.isArray(latestPosts)) {
          latestPosts = Object.values(latestPosts)
        }
      }

      let cities = []
      if (data?.getLocations?.data?.cities) {
        cities = data?.getLocations?.data?.cities
          .map(arr =>
            typeof arr === 'object' && !Array.isArray(arr)
              ? Object.values(arr)
              : arr
          )
          .flat()
          .filter(r => r.id)
      }

      await this.promisedSetState({
        categories,
        sponsoredPosts: sponsoredPosts.map(refinePost),
        latestPosts: latestPosts.map(refinePost),
        cities
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingCategories: false,
      fetchingSponsoredPosts: false,
      fetchingLatestPosts: false,
      fetchingCities: false
    })
  }

  onSearch () {
    navigate(
      'PublicPostList',
      this.state.searchkey ? { filters: { query: this.state.searchkey } } : {}
    )
  }

  async toggleFavourite (list, index, id, isFavourite) {
    if (isFavourite) {
      const b = await removeFromFavourite(id)
      if (b) {
        const posts = [...this.state[list]]
        if (posts[index]) {
          posts[index].is_favourite = false
        }
        await this.promisedSetState({
          [list]: posts
        })
      }
    } else {
      const b = await addToFavourite(id)
      if (b) {
        const posts = [...this.state[list]]
        if (posts[index]) {
          posts[index].is_favourite = true
        }
        await this.promisedSetState({
          [list]: posts
        })
      }
    }
  }

  render () {
    return (
      <>
        <Container>
          <DarkStatusBar />
          <Header
            variant='default'
            leftType='menu'
            middleContent={<View style={styles.logo} />}
          />
          <Content style={theme.layout}>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>
                  {__('Sell & Buy Near You')}
                </Text>
              </View>
              <View style={styles.search}>
                <View style={styles.searchGroup}>
                  <TextInput
                    placeholder={__('What?')}
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    returnKeyType='done'
                    style={styles.searchInput}
                    value={this.state.searchkey}
                    onChangeText={(v) => {
                      this.setState({ searchkey: v })
                    }}
                    onSubmitEditing={this.onSearch}
                  />
                  <Button style={styles.searchBtn} onPress={this.onSearch}>
                    <Icon
                      name='search1'
                      type='AntDesign'
                      style={styles.searchBtnIcon}
                    />
                  </Button>
                </View>
              </View>

              <Category
                fetching={this.state.fetchingCategories}
                list={this.state.categories}
              />
              <Sponsored
                fetching={this.state.fetchingSponsoredPosts}
                list={this.state.sponsoredPosts}
                toggleFavourite={this.toggleFavourite}
              />
              <Latest
                fetching={this.state.fetchingLatestPosts}
                list={this.state.latestPosts}
                toggleFavourite={this.toggleFavourite}
              />
              <City
                list={this.state.cities}
                fetching={this.state.fetchingCities}
              />
            </ScrollView>
          </Content>
        </Container>
        <Footer currentScreen='PublicHome' />
      </>
    )
  }
}

export default connect(({ session }) => ({ session }))(Home)
