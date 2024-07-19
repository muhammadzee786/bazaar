import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.similarContent}>
          <View>
            <PlaceholderMedia style={styles.favoriteImg} />
          </View>
          <View style={styles.favoriteInfo}>
          <PlaceholderLine width={20} />
            <PlaceholderLine width={20} />
            <View style={theme.row}>
            <PlaceholderLine width={20} />
            </View>
            <View style={styles.itemPosted}>
              <PlaceholderLine width={20} />
            </View>
          </View>
        </View>
      </Placeholder>
    )
  }
}
