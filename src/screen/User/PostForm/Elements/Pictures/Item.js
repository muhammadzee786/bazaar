import React from 'react'
import { Image, View } from 'react-native'

import { Icon } from '@component/Basic'
import {
  Button
} from '@component/Form'

import styles from './../../styles'

const Item = ({ item, index, removeImage }) => {
  return (
    <View key={index} style={styles.photoItem}>
      <Image source={{ uri: item.path }} style={styles.photoItemImg} resizeMode='cover' />
      <Button style={styles.photoItemBtn} onPress={() => removeImage(index)}>
        <Icon name='trash' type='Feather' style={styles.photoItemBtnIcon} />
      </Button>
    </View>
  )
}

export default Item
