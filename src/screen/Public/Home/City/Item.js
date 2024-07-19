import React from 'react'
import { Text } from '@component/Basic'

import { Button } from '@component/Form'
import { navigate } from '@navigation/'
import styles from '../styles'

const Item = ({ item }) => {
  const onPress = () => navigate('PublicPostList', { filters: { cityId: item.id } })
  return (
    <Button style={styles.itemCity} onPress={onPress}>
      <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
    </Button>
  )
}

export default Item
