import React from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@component/Basic'
import { Button, TextInput } from '@component/Form'
import { __ } from '@utility/translation'
import styles from './styles'
import { COLOR } from '@theme/typography'
import { navigate } from '@navigation/'
import Support from '@component/Support'
import { store } from '@store/'
import { URLS } from '@config/url'
import http from '@utility/http'

const CloseAccount = () => {
  const deleteAccount = async () => {
    const deletion = async () => {
      const b = false
      await Support.showLoading()
      try {
        const state = store.getState()
        const r = (await http.delete(URLS.USERS + '/' + state.session.user.id)).data

        if (r.success) {
          navigate('UserLogout')
        }
      } catch (e) {
        await Support.showServerError(e)
      }
      await Support.hideLoading()
    }
    Support.showConfirm({
      title: __('Delete'),
      message: __('Are you sure you want to delete your account?'),
      onYes: () => deletion()
    })
  }

  return (
    <>
      <View style={styles.formRow}>
        <View style={styles.row}>
          <Text style={styles.formHeaderTitle}>{__('Close Account')}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.formDesc}>{__('You are sure you want to close your account?')}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Button style={styles.formBtn} onPress={deleteAccount}>
          <Text style={styles.formBtnText}>{__('Submit')}</Text>
        </Button>
        <Button style={[styles.formBtn, { backgroundColor: COLOR.SMOKE_DARK, marginHorizontal: 10 }]} onPress={() => navigate('PublicHome')}>
          <Text style={[styles.formBtnText, { color: '#333' }]}>{__('Cancel')}</Text>
        </Button>
      </View>
    </>
  )
}

export default CloseAccount
