import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'

import { Icon } from '@component/Basic'
import { goBack } from '@navigation'
import { COLOR } from '@theme/typography'

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableHighlight style={styles.customHeaderBtn} onPress={goBack}>
          <Icon name='chevron-left' type='Entypo' style={styles.btnIcon} />
        </TouchableHighlight>
      </View>
      <View style={styles.mid} />
      <View style={styles.right} />
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 80,
    marginTop: 20,
    backgroundColor: COLOR.PRIMARY,
    borderWidth: 1,
    borderColor: '#FF0000'
  },
  left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mid: {

  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 10
  }
}

export default CustomHeader
