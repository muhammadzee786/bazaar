import React from 'react'
import { FlatList, Text, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'
import styles from '../styles'

const List = ({ fetching, list, toggleFavourite }) => {
  if (!fetching && list.length == 0) {
    return null
  }

  const renderTemplate = () => {
    return <Placeholder />
  }

  const renderItem = ({ item, index }) => {
    return (
      <Item
        item={item}
        index={index}
        toggleFavourite={toggleFavourite}
      />
    )
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderTitle}>{__('Sponsored Ads')}</Text>
      </View>
      <FlatList
        data={fetching ? [1, 2] : list}
        showsHorizontalScrollIndicator
        horizontal
        style={{ paddingLeft: 5 }}
        renderItem={fetching ? renderTemplate : renderItem}
      />
    </View>
  )
}

export default List
