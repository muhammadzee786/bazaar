import React from 'react'
import { FlatList, View } from 'react-native'

import styles from './../styles'
import Placeholder from './Placeholder'
import Item from './Item'
import theme from '@theme/styles'
import { Icon, Text } from '@component/Basic'
import { __ } from '@utility/translation'

const List = ({ fetching, list, onImportant, onDelete }) => {
  const renderItem = ({ item, index }) => (
    <Item
      item={item}
      index={index}
      onImportant={onImportant}
      onDelete={onDelete}
    />
  )

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

  const renderList = () => {
    if (fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={list}
        contentContainerStyle={styles.productFlatList}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent}
      />
    )
  }

  return renderList()
}

export default List
