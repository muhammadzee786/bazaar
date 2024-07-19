import React from 'react'
import { Image, View } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'

import { Button, Picker, TextInput } from '@component/Form'

import styles from '../styles'

import theme from '@theme/styles'
import { __ } from '@utility/translation'
import { STORAGE_URL } from '@config/env'
import { navigate } from '@navigation/'

const Item = ({ item, index, onDelete }) => {
  const onView = () => navigate('PublicPostView', { id: item.id })

  const onEdit = () => navigate('UserPostUpdate', { id: item.id })

  const _onDelete = () => onDelete(item.id, index)

  let img = require('@asset/images/no_image.png')
  if (item.pictures && item.pictures.length) {
    img = { uri: STORAGE_URL + '/' + item.pictures[0].filename }
  }
  let category
  if (item.category) {
    category = (
      <View style={styles.itemRow}>
        <Icon name='folder1' type='AntDesign' style={styles.itemIcon} />
        <Text style={styles.itemCategory}>{item.category.name}</Text>
      </View>
    )
  }
  let city
  if (item.city) {
    city = (
      <View style={styles.itemRow}>
        <Icon
          name='location-pin'
          type='SimpleLineIcons'
          style={styles.itemIcon}
        />
        <Text style={styles.itemDate}>{item.city.name}</Text>
      </View>
    )
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemTop}>
        <Image source={img} style={styles.itemTopImg} resizeMode='contain' />
        <View style={styles.itemTopCol}>
          {
            item?.latestPayment?.package
              ? (
                <View style={[styles.itemPremium, { backgroundColor: item.latestPayment.package.ribbon }]}>
                  <Text style={styles.itemPremiumText}>{__(item.latestPayment.package.short_name)}</Text>
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
          <View style={[styles.itemRow, { marginBottom: 10 }]}>
            <Text style={styles.itemName} numberOfLines={1}>{item.title}</Text>
          </View>
          <View style={[styles.itemRow, { marginBottom: 10 }]}>
            <Text style={styles.itemPrice}>{item.price_formated}</Text>
          </View>
          {category}
          <View style={[styles.itemRow, { marginTop: 5 }]}>
            <View style={styles.itemRow}>
              <Icon name='clockcircleo' type='AntDesign' style={styles.itemIcon} />
              <Text style={styles.itemDate}>{item.created_at_formatted}</Text>
            </View>
            {city}
          </View>
        </View>
        <View>
          <Button style={styles.itemBtn} onPress={onEdit}>
            <Icon name='edit' type='AntDesign' style={styles.itemBtnIcon} />
          </Button>
          <Button style={styles.itemBtn} onPress={onView}>
            <Icon name='eye' type='Feather' style={styles.itemBtnIcon} />
          </Button>
          <Button style={styles.itemBtn} onPress={_onDelete}>
            <Icon name='trash-2' type='Feather' style={styles.itemBtnIcon} />
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Item
