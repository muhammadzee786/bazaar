import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder as PlaceholderNative, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Placeholder = () => {
  const [list] = useState([1, 2, 3, 4, 5])

  const renderItem = () => (
    <PlaceholderNative Animation={Fade}>
      <View style={styles.msgItem}>
        <View style={styles.msgLeft}>
          <PlaceholderMedia style={styles.msgAvatar} />
        </View>
        <View style={styles.msgCol}>
          <PlaceholderLine width={100} style={styles.productName} />
          <PlaceholderLine width={80} style={styles.productDesc} />
          <PlaceholderLine width={40} style={styles.productDate} />
        </View>
      </View>
    </PlaceholderNative>
  )

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.productFlatList}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  )
}

export default Placeholder
