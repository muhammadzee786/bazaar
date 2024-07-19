import React from 'react'
import { ScrollView, View } from 'react-native'

import styles from './../styles'
import Item from './Item'

const List = ({ list, session }) => {
  const renderItem = (item) => <Item item={item} session={session} />
  return (
    <View style={styles.chatContent}>
      <View style={styles.chatEmpty} />
      <ScrollView>
        {list.map(renderItem)}
      </ScrollView>
    </View>
  )
}

export default List
