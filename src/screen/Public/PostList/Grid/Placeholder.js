import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={[styles.postGridItem]}>
        <Placeholder
          Animation={Fade}
        >

          <PlaceholderMedia style={styles.postGridImg} />
          <View style={styles.postGridContent}>
            <PlaceholderLine width={80} />
            <PlaceholderLine width={40} />
          </View>

        </Placeholder>
      </View>
    )
  }
}
