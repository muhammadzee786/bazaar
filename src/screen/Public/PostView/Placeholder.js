import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from './styles'

export default class extends React.Component {
  render () {
    return (
      <>
        <Placeholder
          Animation={Fade}
        >
          <View>
            <PlaceholderMedia style={styles.postImg} />
          </View>

          <View style={styles.placeholder}>
            <PlaceholderLine style={styles.postName} width={100} />
            <PlaceholderLine style={styles.postName} width={60} />
          </View>

          <View style={styles.placeholder}>
            <PlaceholderLine style={styles.postSubTitle} width={40} />
            <View style={styles.placeholderRow}>
              <PlaceholderMedia style={styles.placeholderImg} />
              <PlaceholderMedia style={styles.placeholderImg} />
              <PlaceholderMedia style={styles.placeholderImg} />
              <PlaceholderMedia style={styles.placeholderImg} />
              <PlaceholderMedia style={styles.placeholderImg} />
            </View>
          </View>

          <View style={styles.placeholder}>
            <PlaceholderLine style={styles.postName} width={100} />
            <PlaceholderLine style={styles.postName} width={80} />
            <PlaceholderLine style={styles.postName} width={40} />
          </View>
        </Placeholder>
      </>
    )
  }
}
