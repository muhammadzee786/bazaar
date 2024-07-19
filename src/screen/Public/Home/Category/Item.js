import React from 'react'
import { Image } from 'react-native'
import { Text } from '@component/Basic'
import { Button } from '@component/Form'

import styles from '../styles'
import { STORAGE_URL } from '@config/env'
import { navigate } from '@navigation/'

const Item = ({ item }) => {
  let img = require('@asset/images/no_image.png')
  if (item.picture) {
    img = { uri: STORAGE_URL + '/' + item.picture }
  }

  const onPress = () => navigate('PublicPostList', { filters: { categoryId: item.id } })

  return (
    <Button style={styles.categoryItem} onPress={onPress}>
      <Image source={img} style={styles.categoryThumb} resizeMode='contain' />
      <Text style={styles.categoryName}>{item.name}</Text>
    </Button>
  )
}

export default Item
