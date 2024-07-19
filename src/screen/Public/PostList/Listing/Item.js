import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from '../styles'

import { Icon } from '@component/Basic'
import { Button } from '@component/Form'
import { navigate } from '@navigation'
import theme from '@theme/styles'
import { __ } from '@utility/translation'
import dateUtil from '@utility/date'
import { STORAGE_URL } from '@config/env'

export default class extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const item = this.props.item

    const onPress = () => navigate('PublicPostView', { id: item.id })

    let img = require('@asset/images/no-img.png')
    if (item?.pictures?.length) {
      img = { uri: STORAGE_URL + '/' + item.pictures[0].filename }
    }

    return (
      <Button
        underlayColor='transparent'
        style={[styles.postItem, styles.postCol]}
        onPress={onPress}
      >
        <Image source={img} resizeMode='contain' style={styles.postImg} />
        <View style={styles.postContent}>
          <View style={theme.row}>
            <Text style={styles.postTitle} numberOfLines={2}>{item.title}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.postPrice}>{item.price_formatted}</Text>
          </View>
          <View style={[styles.row, { marginBottom: 5 }]}>
            <Icon name='folder1' type='AntDesign' style={styles.postIcon} />
            <Text style={styles.postCategory} numberOfLines={1}>{item?.category?.name}</Text>
          </View>
          <View style={[styles.row, { marginBottom: 5 }]}>
            <Icon name='clockcircleo' type='AntDesign' style={styles.postIcon} />
            <Text style={styles.postDate} numberOfLines={1}>{dateUtil.format(item.created_at)}</Text>
          </View>
          <View style={styles.row}>
            <Icon name='location-pin' type='SimpleLineIcons' style={styles.postIcon} />
            <Text style={styles.postCategory} numberOfLines={1}>{item?.city?.name}</Text>
          </View>
        </View>
        <View style={styles.postWishlist}>
          <Button
            style={item.is_favourite ? styles.postWishlistBtnActive : styles.postWishlistBtn}
            onPress={() => {
              this.props.toggleFavourite(this.props.index, item.id, item.is_favourite)
            }}
          >
            {
              item.is_favourite
                ? (<Icon name='bookmark' type='FontAwesome' style={styles.postWishlistBtnActiveIcon} />)
                : (<Icon name='bookmark' type='FontAwesome' style={styles.postWishlistBtnIcon} />)
            }
          </Button>
        </View>
        {
          item?.latestPayment?.package
            ? (
              <View style={[styles.postFlag, { backgroundColor: item.latestPayment.package.ribbon || 'white' }]}>
                <Text style={styles.postFlagText}>{__(item.latestPayment.package.short_name)}</Text>
              </View>
              )
            : null
        }
      </Button>
    )
  }
}
