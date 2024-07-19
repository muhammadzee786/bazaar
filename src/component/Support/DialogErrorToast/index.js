import React from 'react'
import Toast from 'react-native-toast-message'

import { bind } from '@utility/component'

const config = {
  visible: false,
  title: '',
  message: '',
  visibleBtnCancel: true,
  visibleBtnOk: false,
  labelBtnOk: 'OK'
}

const iconName = 'alert-triangle'
const defaultTitle = 'Error'

class Dialog extends React.PureComponent {
  static instance
  static onHide
  static hideTimeout

  constructor (props) {
    super(props)

    this.state = { ...config }

    bind(this)

    this.showDialog = this.showDialog.bind(this)
    this.hideDialog = this.hideDialog.bind(this)
  }

  async showDialog (c) {
    const { onHide, hideDelay, ...c_ } = c
    const config_ = { ...config, ...c_ }
    config_.visible = true
    Dialog.onHide = onHide

    const options = {
      type: 'error',
      position: 'top',
      text1: config_.title || defaultTitle,
      text2: config_.message,
      text2NumberOfLines: 3,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      onShow: () => {},
      onHide: () => {},
      onPress: () => {},
      props: {}
    }
    if (hideDelay) {
      options.autoHide = true
      options.visibilityTime = hideDelay
    }
    options.onHide = this.hideDialog

    await this.promisedSetState(config_)

    Toast.show(options)
  }

  async hideDialog () {
    await this.promisedSetState({
      visible: false
    })

    if (Dialog.onHide) {
      Dialog.onHide()
    }
    Dialog.onHide = null
  }

  render () {
    return null
  }
}

export default Dialog
