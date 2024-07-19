import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <>
        <Placeholder
          Animation={Fade}
        >
          <View style={[styles.postItem, styles.postCol]}>
          <PlaceholderMedia style={styles.postImg} />
            <View style={styles.postContent}>
              <PlaceholderLine width={90} />
              <PlaceholderLine width={50} />
              <PlaceholderLine width={30} />
            </View>
          </View>
      </Placeholder>
        </>
    )
  }
}
