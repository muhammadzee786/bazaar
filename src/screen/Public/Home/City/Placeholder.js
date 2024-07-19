import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = ()=> {
  return (
    <View style={styles.itemCity}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderLine width={80} />
      </Placeholder>
    </View>
  )
}

export default Template