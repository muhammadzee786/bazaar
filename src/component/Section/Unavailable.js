import React from 'react'
import { Text, View } from 'react-native'

import { Icon } from '@component/Basic'
import { FAMILY, SIZE, COLOR } from '@theme/typography'

const Unavailable = ({ message }) => {
  return (
    <View style={styles.content}>
      <Icon name='exclamationcircle' type='AntDesign' style={styles.icon} />
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = {
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  icon: {
    fontSize: SIZE.SIZE_48,
    color: COLOR.RED,
    paddingBottom: 20
  },

  text: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30
  }
}

export default Unavailable
