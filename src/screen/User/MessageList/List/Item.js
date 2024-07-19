import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@component/Basic'

import { Button } from '@component/Form'
import styles from './../styles'
import { navigate } from '@navigation/'
import { STORAGE_URL } from '@config/env'
import dateUtil from '@utility/date'
import { COLOR } from '@theme/typography'

const Item = ({ item, index, onImportant, onDelete }) => {
  let userImg = require('@asset/images/avatar-dark.png')
  if (item.p_creator?.photo) {
    userImg = STORAGE_URL + '/' + item.p_creator.photo
  }
  const _onView = () => navigate('UserMessageView', { id: item.id })
  const _onImportant = () => onImportant(index, item.id, item.p_is_important)
  const _onDelete = () => onDelete(index, item.id)
  return (
    <View style={styles.msgItem}>
      <View style={styles.msgLeft}>
        <View>
          <Image source={userImg} style={styles.msgAvatar} />
          <View style={[styles.msgStatus, item.p_is_online ? { backgroundColor: COLOR.SUCCESS } : null]} />
        </View>
        <View style={styles.msgRow}>
          <Text style={styles.msgName}>{item.p_creator?.name}</Text>
        </View>
      </View>
      <View style={styles.msgCol}>
        <Button style={styles.msgRow} onPress={_onView}>
          <Text style={[styles.msgTitle, item.p_is_unread ? styles.msgUnRead : null]} numberOfLines={1}>{item.subject}</Text>
        </Button>
        <Button style={styles.msgRow} onPress={_onView}>
          <Text style={[styles.msgDesc, item.p_is_unread ? styles.msgUnRead : null]} numberOfLines={1}>{item.latest_message?.body}</Text>
        </Button>
        <Text style={styles.msgDate} numberOfLines={1}>{dateUtil.formatFull(item.updated_at)}</Text>
        <View style={styles.msgRight}>
          <View style={styles.msgRightRow}>
            <Button style={styles.msgOption} onPress={_onImportant}>
              <Icon name={item.p_is_important ? 'star' : 'staro'} type='AntDesign' style={[styles.msgOptionIcon, item.p_is_important ? { color: COLOR.WARNING } : null]} />
            </Button>
            <Button style={styles.msgOption} onPress={_onView}>
              <Icon name={item.p_is_unread ? 'envelope-o' : 'envelope-open-o'} type='FontAwesome' style={styles.msgOptionIcon} />
            </Button>
          </View>
          <Button style={styles.msgOption} onPress={_onDelete}>
            <Icon name='trash' type='Feather' style={styles.msgOptionIcon} />
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Item
