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
          <View style={[styles.pageHeader, { paddingVertical: 0 }]}>
            <PlaceholderLine width={60} />
          </View>
          <View style={styles.pageSpace} />
          <View style={styles.pageContent}>
            <PlaceholderLine width={100} />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={100} />
          </View>
          <View style={styles.pageSpace} />
          <View style={styles.pageContent}>
            <PlaceholderLine width={100} />
            <PlaceholderLine width={100} />
            <PlaceholderLine width={100} />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={40} />
          </View>
          <View style={styles.pageSpace} />
          <View style={styles.pageContent}>
            <PlaceholderLine width={100} />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={100} />
          </View>
          <View style={styles.pageSpace} />
          <View style={styles.pageContent}>
            <PlaceholderLine width={100} />
            <PlaceholderLine width={100} />
            <PlaceholderLine width={100} />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={40} />
          </View>
          <View style={styles.pageSpace} />
        </Placeholder>
      </>
    )
  }
}
