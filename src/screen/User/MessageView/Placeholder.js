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
          style={{ flex: 1 }}
        >
          <View style={styles.chatHeader}>
            <View style={{ flex: 1 }}>
              <PlaceholderLine style={styles.productName} width={80} />
            </View>
          </View>

          <View style={styles.chatContent} />

          <View style={styles.chatBot}>
            <View style={styles.chatBotGroup} />
            <PlaceholderMedia style={styles.chatPlaceholderBtn} />
          </View>
        </Placeholder>
      </>
    )
  }
}
