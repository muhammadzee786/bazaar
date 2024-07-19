import React from 'react'
import { Image, View } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'

import { Button, Picker, TextInput } from '@component/Form'

import styles from '../styles'

import theme from '@theme/styles'
import { __ } from '@utility/translation'
import dateUtil from '@utility/date'
import { STORAGE_URL } from '@config/env'
import { navigate } from '@navigation/'

export default class extends React.Component {
  render () {
    const item = this.props.item

    const onView = () => navigate('PublicPostView', { id: item.post?.id })

    const onDelete = () => this.props.onDelete(item.id, this.props.index)

    let img = require('@asset/images/no_image.png')
    if (item.post.pictures && item.post.pictures.length) {
      img = { uri: STORAGE_URL + '/' + item.post.pictures[0].filename }
    }

    return (
      <View style={styles.item}>
        <Button style={styles.itemTop} onPress={onView}>
          <Image source={img} style={styles.itemTopImg} resizeMode='contain' />
          <View style={styles.itemTopCol}>
            <View />
            {/* }
            <View style={styles.itemPremium}>
              <Text style={styles.itemPremiumText}>{__('Premium+')}</Text>
            </View>
            { */}
            <View style={styles.itemView}>
              <Icon name='eyeo' type='AntDesign' style={styles.itemViewIcon} />
              <Text style={styles.itemViewText}>{item.post?.visits}</Text>
            </View>
          </View>
        </Button>
        <View style={styles.itemBot}>
          <View style={styles.itemCol}>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item.post?.title}</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.itemPrice}>{item.post?.price_formated}</Text>
            </View>
            <View style={styles.itemRow}>
              <View style={styles.itemRow}>
                <Icon name='clockcircleo' type='AntDesign' style={styles.itemIcon} />
                <Text style={styles.itemDate}>{item.post?.created_at_formatted}</Text>
              </View>
            </View>
          </View>
          <Button style={styles.itemBtn} onPress={onDelete}>
            <Icon name='trash-2' type='Feather' style={styles.itemBtnIcon} />
          </Button>
        </View>
      </View>
    )
  }
}
