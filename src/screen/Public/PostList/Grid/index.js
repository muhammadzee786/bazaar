import React from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

import styles from '../styles'

import Item from './Item'
import Placeholder from './Placeholder'

import { Icon } from '@component/Basic'
import theme from '@theme/styles'
import { __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderListFooterComponent = this.renderListFooterComponent.bind(this)
    this.renderListEmptyComponent = this.renderListEmptyComponent.bind(this)
  }

  renderTemplate() {
    return <Placeholder />
  }

  renderItem({ item, index }) {
    return (
      <Item
        index={index}
        item={item}
        toggleFavourite={this.props.toggleFavourite}
      />
    )
  }

  renderListFooterComponent() {
    if (this.props.fetchingMore) {
      return (
        <View style={{ height: 20 }}>
          <ActivityIndicator animating color='grey' size='small' />
        </View>
      )
    }

    return <View style={{ height: 20 }} />
  }

  renderListEmptyComponent() {
    if (this.props.fetchingInitial || this.props.fetchingMore) {
      return null
    }

    if (this.props.list.length === 0) {
      return (
        <View style={theme.emptyContainer}>
          <View style={theme.emptyContent}>
            <Icon name='emoji-sad' type='Entypo' style={theme.emptyIcon} />
            <Text style={theme.emptyTitle}>{__('Sorry')}</Text>
            <Text style={theme.emptyDesc}>{__('No posts found')}</Text>
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <>
        <View style={styles.postContainer}>
          <FlatList
            numColumns={2}
            data={this.props.fetchingInitial ? [1, 2, 3, 4] : this.props.list}
            extraData={{
              fetchingInitial: this.props.fetchingInitial,
              fetchingMore: this.props.fetchingMore
            }}
            showsVerticalScrollIndicator={false}
            renderItem={this.props.fetchingInitial ? this.renderTemplate : this.renderItem}
            ListFooterComponent={this.renderListFooterComponent}
            ListEmptyComponent={this.renderListEmptyComponent}
            onEndReached={this.props.onEndReached}
            style={{marginHorizontal: 5}}
          />
        </View>
      </>
    )
  }
}
