import React from 'react'
import Toast, { SuccessToast } from 'react-native-toast-message'

import Loader from './Loader'
import DialogError from './DialogError'
import DialogErrorToast from './DialogErrorToast'
import DialogSuccess from './DialogSuccess'
import DialogSuccessToast from './DialogSuccessToast'
import DialogConfirm from './DialogConfirm'
import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { Icon } from '@component/Basic'

const toastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      style={{ borderLeftColor: COLOR.RED }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontFamily: FAMILY.MEDIUM,
        fontSize: SIZE.SIZE_14,
        color: COLOR.DARK
      }}
      text2Style={{
        fontFamily: FAMILY.MEDIUM,
        fontSize: SIZE.SIZE_14,
        color: COLOR.DARK
      }}
      renderLeadingIcon={() => <Icon name='check-circle' type='Feather' style={styles.toastSuccessIcon} />}
    />
  )
}

class Support extends React.PureComponent {
  static showLoading() {
    Loader.instance.showLoading()
  }

  static hideLoading() {
    Loader.instance.hideLoading()
  }

  static async showServerError(e, c = {}) {
    const messages = []
    if (typeof e === 'object') {
      if (typeof e.response === 'object') {
        if (typeof e.response.data === 'object') {
          if (typeof e.response.data.errors === 'object') {
            const errors = e.response.data.errors
            Object.keys(errors).forEach(k => {
              Object.values(errors[k]).forEach(v => messages.push(v))
            })
          } else if (typeof e.response.data.message === 'string') {
            messages.push(e.response.data.message)
          }
          if (messages.length === 0) {
            if (e.response.data.message) {
              messages.push(e.response.data.message)
            }
          }
        }
      } else if (typeof e.message === 'string') {
        messages.push(e.message)
      }
    } else if (typeof e === 'string') {
      messages.push(e)
    }
    if (messages.length === 0) {
      messages.push('Failed')
    }
    await Support.showError({
      message: messages.join('\n'),
      ...c
    })
  }

  static async showError(c = {}) {
    if (c.layout === 'toast') { /* modal | toast */
      await DialogErrorToast.instance.showDialog(c)
    } else {
      await DialogError.instance.showDialog(c)
    }
  }

  static async showSuccess(c = {}) {
    if (c.layout === 'toast') { /* modal | toast */
      await DialogSuccessToast.instance.showDialog(c)
    } else {
      await DialogSuccess.instance.showDialog(c)
    }
  }

  static async hideSuccess() {
    await DialogSuccess.instance.hideDialog()
  }

  static async showConfirm(c = {}) {
    await DialogConfirm.instance.showDialog(c)
  }

  render() {
    return (
      <>
        <Loader
          key='Loader'
          ref={c => {
            if (c) Loader.instance = c
          }}
        />
        <DialogError
          key='DialogError'
          ref={c => {
            if (c) DialogError.instance = c
          }}
        />
        <DialogErrorToast
          key='DialogErrorToast'
          ref={c => {
            if (c) DialogErrorToast.instance = c
          }}
        />
        <DialogSuccess
          key='DialogSuccess'
          ref={c => {
            if (c) DialogSuccess.instance = c
          }}
        />
        <DialogSuccessToast
          key='DialogSuccessToast'
          ref={c => {
            if (c) DialogSuccessToast.instance = c
          }}
        />
        <DialogConfirm
          key='DialogConfirm'
          ref={c => {
            if (c) DialogConfirm.instance = c
          }}
        />
        <Toast config={toastConfig} />
      </>
    )
  }
}

const styles = {
  toastSuccessIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.SUCCESS,
    marginLeft: 15,
    marginVertical: 15
  }
}

export default Support
