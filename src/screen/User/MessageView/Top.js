import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@component/Basic'
import { Button } from '@component/Form'
import styles from './styles'
import { COLOR } from '@theme/typography'
import { __ } from '@utility/translation'

const Top = ({ thread }) => {
  return (
    <View style={styles.chatHeader}>
      <View style={styles.chatHeaderCol}>
        <View style={styles.chatRow}>
          <Text style={styles.chatAdName} numberOfLines={2}> <Text style={styles.chatSubject}>{__('Contact request about')}</Text> {thread.subject}</Text>
        </View>
      </View>
      <View style={styles.chatHeaderRight}>
        <Button style={styles.chatHeaderBtn}>
          <Icon name={thread.p_is_important ? 'star' : 'staro'} type='AntDesign' style={[styles.chatHeaderBtnIcon, thread.p_is_important ? { color: COLOR.WARNING } : null]} />
        </Button>
        <Button style={styles.chatHeaderBtn}>
          <Icon name='envelope-open-o' type='FontAwesome' style={styles.chatHeaderBtnIcon} />
        </Button>
        <Button style={styles.chatHeaderBtn}>
          <Icon name='trash' type='Feather' style={styles.chatHeaderBtnIcon} />
        </Button>
      </View>
    </View>
  )
}

export default Top
