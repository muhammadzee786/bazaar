import React from 'react'
import { Image, View } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'

import { Button } from '@component/Form'

import { navigate } from '@navigation'
import styles from '../styles'

import theme from '@theme/styles'
import { __ } from '@utility/translation'
import { STORAGE_URL } from '@config/env'

const Item = ({ item, index, toggleFavourite }) => {
  const onPress = () => navigate('PublicPostView', { id: item.id })
  const _toggleFavourite = () => toggleFavourite('latestPosts', index, item.id, item.is_favourite)

  let img = require('@asset/images/no_image.png')
  if (item.pictures && item.pictures.length) {
    img = { uri: STORAGE_URL + '/' + item.pictures[0].filename }
  }
  let category
  if (item.category && item.category.length) {
    category = (
      <View style={styles.itemRow}>
        <Icon name='folder1' type='AntDesign' style={styles.itemIcon} />
        <Text style={styles.itemCategory} numberOfLines={1}>{item.category.map(c => c.name).join(', ')}</Text>
      </View>
    )
  }
  let city
  if (item.city) {
    city = (
      <View style={styles.itemRow}>
        <Icon name='location-pin' type='SimpleLineIcons' style={styles.itemIcon} />
        <Text style={styles.itemDate} numberOfLines={1}>{item.city.name}</Text>
      </View>
    )
  } 
  return (
    <Button style={styles.item} onPress={onPress}>
      <View style={styles.itemTop}>
        <Image source={img} style={styles.itemTopImg} resizeMode='contain' />
        <View style={styles.itemTopCol}>
          {
            item?.latestPayment?.package
              ? (
                <View style={[styles.itemFlag, { backgroundColor: item.latestPayment.package.ribbon || 'white' }]}>
                  <Text style={styles.itemFlagText}>{__(item.latestPayment.package.short_name)}</Text>
                </View>
                )
              : null
          }
          <View style={styles.itemView}>
            <Icon name='eyeo' type='AntDesign' style={styles.itemViewIcon} />
            <Text style={styles.itemViewText}>{item.visits || 0}</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemBot}>
        <View style={styles.itemCol}>
          <Text style={styles.itemName} numberOfLines={1}>{item.title}</Text>
          <View style={styles.itemRow}>
            <Text style={styles.itemPrice}>€{item.price}</Text>
          </View>
          {category}
          <View style={[styles.itemRow, { marginBottom: 5 }]}>
            <Icon name='clockcircleo' type='AntDesign' style={styles.itemIcon} />
            <Text style={styles.itemDate} numberOfLines={1}>{item.created_at_formatted}</Text>
          </View>
          {city}
        </View>
        <View>
          <Button style={styles.itemBtn} onPress={_toggleFavourite}>
            {
              item.is_favourite
                ? (<Icon name='bookmark' type='FontAwesome' style={styles.itemBtnActiveIcon} />)
                : (<Icon name='bookmark' type='FontAwesome' style={styles.itemBtnIcon} />)
            }
          </Button>
        </View>
      </View>
    </Button>
  )
}

export default Item
