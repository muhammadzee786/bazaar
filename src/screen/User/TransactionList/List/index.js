import React from 'react'
import { FlatList, View } from 'react-native'

import { __ } from '@utility/translation'
import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import theme from '@theme/styles'
import { Icon, Text } from '@component/Basic'

const List = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderListEmptyComponent = () => {
    if (props.fetching) {
      return null
    }

    if (props.list.length === 0) {
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

  if (props.fetching) {
    return <Placeholder />
  }

  return (
    <View style={styles.productContainer}>
      <FlatList
        data={props.list}
        contentContainerStyle={styles.productFlatList}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  )
}

export default List
