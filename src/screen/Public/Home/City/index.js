import React from 'react'
import { FlatList, Text, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'
import styles from '../styles'

const List = ({ fetching, list }) => {
  if (!fetching && list.length == 0) {
    return null
  }

  const renderTemplate = () => {
    return <Placeholder />
  }

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    )
  }

  return (
    <View style={styles.cityContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderTitle}>{__('Browse by City or Region')}</Text>
      </View>
      <FlatList
        data={fetching ? [1, 2, 3, 4, 5, 6] : list}
        contentContainerStyle={styles.productFlatList}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 10 }}
        renderItem={fetching ? renderTemplate : renderItem}
      />
    </View>
  )
}

export default List