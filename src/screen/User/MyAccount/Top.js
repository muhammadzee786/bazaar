import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@component/Basic'

import { __ } from '@utility/translation'
import { Button } from '@component/Form'
import styles from './styles'
import { STORAGE_URL } from '@config/env'
import { openImagePicker } from '@utility/file'
import Support from '@component/Support'
import { store } from '@store'
import { serialize } from 'object-to-formdata'
import http from '@utility/http'
import { compile } from 'path-to-regexp'
import { URLS } from '@config/url'
import { checkUserSession } from '@helper/user'

const selectImage = () => {
  openImagePicker({
    title: 'Choose a Photo',
    message: 'Select from galley or camera',
    multiple: false,
    useFrontCamera: true,
    cropping: true,
    width: 480,
    height: 480,
    onSuccess: async data => {
      uploadImage(data)
    }
  })
}

const uploadImage = async (image) => {
  await Support.showLoading()
  try {
    const state = store.getState()
    const formdata = serialize({ ...state.session.user })

    formdata.append('photo', {
      uri: image.path,
      type: image.mime,
      name: image.name
    })

    formdata.append('_method', 'PUT')

    const url = compile(URLS.USERS_ID)({ id: state.session.user.id })
    const r = (await http.post(url, formdata)).data

    if (r.success) {
      await Support.showSuccess({
        message: r.message || 'Successfully updated',
        onHide: () => {},
        hideDelay: 2500
      })
      await checkUserSession()
    }
  } catch (e) {
    await Support.showServerError(e)
  }
  await Support.hideLoading()
}

const Top = ({ session }) => {
  let img = require('@asset/images/avatar-dark.png')
  if (session.user.photo) {
    img = { uri: STORAGE_URL + '/' + session.user.photo }
  }

  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <View style={styles.avatarContainer}>
          <Image source={img} style={styles.avatarImg} resizeMode='cover' />
          <Button style={styles.avatarBtn} onPress={selectImage}>
            <Icon name='edit' type='AntDesign' style={styles.avatarBtnIcon} />
          </Button>
        </View>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{__('Hello')} {session.user.name}</Text>
      </View>
      {/* }
      <View style={styles.headerRow}>
        <Text style={styles.headerDesc}>{__('You last logged in at: Nov 28th, 2021 at 17:24')}</Text>
      </View>
      { */}
    </View>
  )
}

export default Top
