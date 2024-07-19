import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder as PlaceholderNative, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Placeholder = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (<View style={styles.item}>
    <PlaceholderNative
      Animation={Fade}
    >
      <View style={styles.itemBot}>
        <View style={styles.itemCol}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={60} />
          <PlaceholderLine width={40} />
        </View>
      </View>
    </PlaceholderNative>
  </View>)

  return (
    <View style={styles.productContainer}>
      <FlatList
        data={list}
        contentContainerStyle={styles.productFlatList}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Placeholder
