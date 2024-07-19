import React from 'react'
import { FlatList, View } from 'react-native'

import { __ } from '@utility/translation'
import theme from '@theme/styles'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { Icon, Text } from '@component/Basic'

const List = ({ fetching, list, onDelete }) => {
  const renderTemplate = () => {
    return <Placeholder />
  }

  const renderItem = ({ item, index }) => {
    return (
      <Item
        item={item}
        index={index}
        onDelete={onDelete}
      />
    )
  }

  const renderListEmptyComponent = () => {
    if (fetching) {
      return null
    }

    if (list.length === 0) {
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

  return (
    <View style={styles.productContainer}>
      <FlatList
        data={fetching ? [1, 2] : list}
        contentContainerStyle={styles.productFlatList}
        showsHorizontalScrollIndicator={false}
        renderItem={fetching ? renderTemplate : renderItem}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  )
}

export default List
