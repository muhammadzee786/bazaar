import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@component/Basic'
import styles from './../styles'
import { STORAGE_URL } from '@config/env'

const Item = ({ item, session }) => {
  const isSelf = session.user.id == item.user_id

  let userAvatar
  let readIcon

  if (isSelf) {
    if (item.is_read) {
      readIcon = <Icon name='checkmark-done' type='Ionicons' style={styles.chatItemRead} />
    }
  } else {
    userAvatar = (
      <Image
        source={
            item.user?.photo
              ? { uri: STORAGE_URL + '/' + item.user.photo }
              : require('@asset/images/avatar-dark.png')
        }
        style={styles.chatAvatar}
      />
    )
  }

  const msgStyle = [styles.chatItemContent]
  msgStyle.push(isSelf ? styles.chatItemRight : styles.chatItemLeft)

  const dateStyle = [styles.chatItemRow]
  if (isSelf) {
    dateStyle.push({ justifyContent: 'flex-end' })
  }

  return (
    <View style={styles.chatItem}>
      {userAvatar}
      <View style={styles.chatItemCol}>
        <View style={msgStyle}>
          <Text style={styles.chatItemMsg}>{item.body}</Text>
        </View>
        <View style={dateStyle}>
          <Text style={styles.chatItemDate}>{item.created_at_formatted}</Text>
          {readIcon}
        </View>
      </View>
    </View>
  )
}

export default Item
