import React from 'react'
import { RefreshControl, Text, View } from 'react-native'
import { connect } from 'react-redux'
import qs from 'qs'
import urlParse from 'url-parse'

import styles from './styles'
import { Container, Content, Icon } from '@component/Basic'
import { Button, TextInput } from '@component/Form'
import Header from '@component/Header'
import { priceRanges, sortings } from '@config/filters'
import { URLS } from '@config/url'
import { addToFavourite, refinePost, removeFromFavourite } from '@helper/post'
import theme from '@theme/styles'
import { bind } from '@utility/component'
import http from '@utility/http'
import { __ } from '@utility/translation'
import { LightStatusBar } from '@component/StatusBar'

import Filter from './Filter'
import Sorting from './Sorting'
import Listing from './Listing'
import Grid from './Grid'
import { ScrollView } from 'react-native-gesture-handler'

class PostListing extends React.Component {
  constructor (props) {
    super(props)

    const filters = props.route.params.filters || {}
    filters.op = 'search'
    filters.page = 1
    filters.orderBy = 'date'
    console.log(props.route.params)

    const query = filters.query || ''

    const listType = props.route.params.listType || 'list'

    this.state = {
      posts: [],
      fetchingPostsInitial: true,
      fetchingPostsMore: false,
      filters,
      query,
      listType,
      url: null
    }

    bind(this)

    this.applyFilter = this.applyFilter.bind(this)
    this.normalizeFilter = this.normalizeFilter.bind(this)
    this.fetchPosts = this.fetchPosts.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.onSearchQuery = this.onSearchQuery.bind(this)
    this.openSorting = this.openSorting.bind(this)
    this.openFilter = this.openFilter.bind(this)
    this.toggleFavourite = this.toggleFavourite.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderListType = this.renderListType.bind(this)
    this.renderSearch = this.renderSearch.bind(this)
  }

  async componentDidMount () {
    await this.normalizeFilter()
    await this.fetchPosts()
  }

  async applyFilter (filters) {
    filters.page = 1
    await this.promisedSetState({
      filters,
      fetchingPostsInitial: true,
      posts: []
    })
    await this.normalizeFilter()
    await this.fetchPosts()
  }

  async normalizeFilter () {
    const filters = {}
    Object.keys(this.state.filters).forEach(f_ => {
      let f = f_
      const v = this.state.filters[f_]
      switch (f_) {
        case 'categoryId':
          f = 'c'
          break
        case 'subCategoryId':
          f = 'sc'
          break
        case 'cityId':
          f = 'l'
          break
        case 'query':
          f = 'q'
          break
        case 'priceRange':
          if (priceRanges[v]) {
            if (priceRanges[v].from) {
              filters.minPrice = priceRanges[v].from
            }
            if (priceRanges[v].to) {
              filters.maxPrice = priceRanges[v].to
            }
          }
          return
        case 'orderBy':
          if (sortings[v]) {
            filters.orderBy = sortings[v].param
          }
          return
        default:
          break
      }

      filters[f] = v
    })
    filters.embed = 'pictures'

    const parsed = urlParse(URLS.POSTS, true)
    parsed.set('query', filters)
    await this.promisedSetState({
      url: parsed.toString(v => qs.stringify(v, { encode: true, encodeValuesOnly: true }))
    })
  }

  async fetchPosts () {
    try {
      const r = (await http.get(this.state.url)).data
      if (r?.result?.data && Array.isArray(r.result.data)) {
        await this.promisedSetState({
          url: null,
          filters: { ...this.state.filters, page: this.state.filters.page + 1 }
        })
        await this.promisedSetState({
          posts: [...this.state.posts, ...r.result.data.map(refinePost)]
        })
        await this.normalizeFilter()
      } else {
        await this.promisedSetState({
          url: null
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingPostsInitial: false,
      fetchingPostsMore: false
    })
  }

  async onEndReached (e) {
    if (this.state.url) {
      if (!this.state.fetchingPostsInitial && !this.state.fetchingPostsMore) {
        await this.promisedSetState({
          fetchingPostsMore: true
        })
        await this.fetchPosts()
      }
    }
  }

  onRefresh () {
    if (this.state.fetchingPostsInitial || this.state.fetchingPostsMore) {
      return
    }
    this.applyFilter({ ...this.state.filters })
  }

  async onSearchQuery () {
    if (this.state.fetchingPostsInitial || this.state.fetchingPostsMore) {
      return
    }

    const filters = { ...this.state.filters }
    if (typeof filters.query !== 'undefined') {
      delete filters.query
    }
    if (this.state.query) {
      filters.query = this.state.query
    }
    this.applyFilter(filters)
  }

  openSorting () {
    if (this.state.fetchingPostsInitial || this.state.fetchingPostsMore) {
      return
    }

    this.refSorting.open(this.state.filters)
  }

  openFilter () {
    if (this.state.fetchingPostsInitial || this.state.fetchingPostsMore) {
      return
    }

    this.refFilter.open(this.state.filters)
  }

  async toggleFavourite (index, id, isFavourite) {
    if (isFavourite) {
      const b = await removeFromFavourite(id)
      if (b) {
        const posts = [...this.state.posts]
        if (posts[index]) {
          posts[index].is_favourite = false
        }
        await this.promisedSetState({
          posts
        })
      }
    } else {
      const b = await addToFavourite(id)
      if (b) {
        const posts = [...this.state.posts]
        if (posts[index]) {
          posts[index].is_favourite = true
        }
        await this.promisedSetState({
          posts
        })
      }
    }
  }

  renderSearch () {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchInputGroup}>
          <View style={styles.searchInputCol}>
            <TextInput
              editable={!(this.state.fetchingPostsInitial || this.state.fetchingPostsMore)}
              maxLength={30}
              placeholder={__('ie. Car')}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.searchInput}
              value={this.state.query || ''}
              onChangeText={query => (this.setState({ query }))}
              onSubmitEditing={this.onSearchQuery}
            />
          </View>
          <Button style={theme.btnTransparent} onPress={this.onSearchQuery}>
            <Icon name='search' type='FontAwesome' style={styles.searchIcon} />
          </Button>
        </View>
      </View>
    )
  }

  renderListType () {
    return (
      <View style={styles.view}>
        <Button style={this.state.listType === 'list' ? styles.viewBtnActive : styles.viewBtn} onPress={() => (this.setState({ listType: 'list' }))}>
          <Icon name='list' type='Entypo' style={this.state.listType === 'list' ? styles.viewBtnActiveIcon : styles.viewBtnIcon} />
        </Button>

        <Button style={this.state.listType === 'grid' ? styles.viewBtnActive : styles.viewBtn} onPress={() => (this.setState({ listType: 'grid' }))}>
          <Icon name='grid-outline' type='Ionicons' style={this.state.listType === 'grid' ? styles.viewBtnActiveIcon : styles.viewBtnIcon} />
        </Button>
      </View>
    )
  }

  renderList () {
    const C = this.state.listType === 'grid' ? Grid : Listing

    return (
      <C
        list={this.state.posts}
        fetchingInitial={this.state.fetchingPostsInitial}
        fetchingMore={this.state.fetchingPostsMore}
        toggleFavourite={this.toggleFavourite}
        onEndReached={this.onEndReached}
      />
    )
  }

  render () {
    return (
      <Container style={theme.layout}>
        <LightStatusBar />
        <Header
          variant='secondary'
          leftType='backarrow'
          rightContent={this.renderListType()}
        />
        <Content
          style={theme.layoutFx}
          refreshControl={
            <RefreshControl
              refreshing={this.state.fetchingPostsInitial}
              onRefresh={this.onRefresh}
            />
          }
        >
          {this.renderSearch()}
          {this.renderList()}
        </Content>

        <Sorting
          ref={r => { this.refSorting = r }}
          apply={this.applyFilter}
        />

        <Filter
          ref={r => { this.refFilter = r }}
          apply={this.applyFilter}
        />

        <View style={styles.bot}>
          <Button style={styles.fBtnItems} onPress={this.openSorting}>
            <Icon name='sort-amount-asc' type='FontAwesome' style={styles.fBtnIcon} />
            <Text style={styles.botTextActive}>{__('Sort by')}</Text>
          </Button>
          <Button style={styles.fBtnItems} onPress={this.openFilter}>
            <Icon name='sliders' type='FontAwesome' style={styles.fBtnIcon} />
            <Text style={styles.botText}>{__('Filter')}</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(PostListing)
