import React from 'react'
import { View } from 'react-native'

import styles from './../styles'
import Item from './Item'

const Tabs = ({ tabs, currentTab, select }) => {
  const renderItem = (item) => (
    <Item
      key={item.id}
      item={item}
      currentTab={currentTab}
      select={select}
    />
  )
  return (
    <View style={styles.tabs}>
      {tabs.map(renderItem)}
    </View>
  )
}

export default Tabs
