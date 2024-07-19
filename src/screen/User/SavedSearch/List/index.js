import React from 'react'
import { FlatList, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'
import styles from '../styles'
import theme from '@theme/styles'
import { Icon, Text } from '@component/Basic'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderListEmptyComponent = this.renderListEmptyComponent.bind(this)
  }

  renderTemplate () {
    return <Placeholder />
  }

  renderItem ({ item, index }) {
    return (
      <Item
        index={index}
        item={item}
        onDelete={this.props.onDelete}
      />
    )
  }

  renderListEmptyComponent () {
    if (this.props.fetching) {
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

  render () {
    return (
      <View style={styles.productContainer}>
        <FlatList
          data={this.props.fetching ? [1, 2] : this.props.list}
          contentContainerStyle={styles.productFlatList}
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          ListEmptyComponent={this.renderListEmptyComponent}
        />
      </View>
    )
  }
}
