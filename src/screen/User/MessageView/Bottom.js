import React, { useState } from 'react'
import { View } from 'react-native'

import { Icon } from '@component/Basic'
import { TextInput, Button } from '@component/Form'
import styles from './styles'
import Support from '@component/Support'
import { URLS } from '@config/url'
import http from '@utility/http'

const Bottom = ({ thread, session, onMessageSent }) => {
  const [body, setBody] = useState('')

  const onSubmit = async () => {
    await Support.showLoading()
    try {
      const r = (await http.put(URLS.THREADS + '/' + thread.id, { body })).data
      if (r.success) {
        if (r.result?.latest_message?.user_id == session.user.id) {
          onMessageSent(r.result.latest_message)
        }
        setBody('')
        await Support.showSuccess({
          message: r.message || 'Successfully sent',
          onHide: () => {},
          hideDelay: 2500
        })
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  return (
    <View style={styles.chatBot}>
      <View style={styles.chatBotGroup}>
        <TextInput
          multiline
          placeholder='Type a message'
          placeholderTextColor='rgba(0,0,0,0.5)'
          style={styles.chatBotInput}
          value={body}
          onChangeText={setBody}
        />
      </View>
      {/* }
      <Button style={styles.chatAttachBtn}>
        <Icon name='attach' type='Ionicons' style={styles.chatBtnIcon} />
      </Button>
      { */}
      <Button style={styles.chatBtn} onPress={onSubmit}>
        <Icon name='paper-plane-outline' type='Ionicons' style={styles.chatBtnIcon} />
      </Button>
    </View>
  )
}

export default Bottom
