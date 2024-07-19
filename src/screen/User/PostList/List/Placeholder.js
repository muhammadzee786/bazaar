import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  return (
    <View style={styles.item}>
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.itemTop}>
          <PlaceholderMedia style={styles.itemTopImg} />
        </View>
        <View style={styles.itemBot}>
          <View style={styles.itemCol}>
            <PlaceholderLine width={80} />
            <PlaceholderLine width={40} />
            <PlaceholderLine width={20} />
          </View>
          <View style={styles.itemRow}>
            <PlaceholderMedia style={styles.itemBtn2} />
            <PlaceholderMedia style={styles.itemBtn2} />
          </View>
        </View>
      </Placeholder>
    </View>
  )
}

export default Template