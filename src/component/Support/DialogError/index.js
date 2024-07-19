import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import Modal from 'react-native-modalbox'

import styles from './styles'
import { Icon } from '@component/Basic'
import { Button } from '@component/Form'
import { bind } from '@utility/component'
import { __ } from '@utility/translation'

const config = {
  visible: false,
  title: '',
  message: '',
  visibleBtnCancel: true,
  visibleBtnOk: false,
  labelBtnOk: ''
}

const iconName = 'exclamationcircle'
const defaultTitle = 'Error'
const defaultLabelBtnOk = 'OK'

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
    if (hideDelay) {
      Dialog.hideTimeout = setTimeout(this.hideDialog, hideDelay)
    }
    await this.promisedSetState(config_)
    this.refDialog.open()
  }

  async hideDialog () {
    if (Dialog.hideTimeout) {
      clearTimeout(Dialog.hideTimeout)
      Dialog.hideTimeout = null
    }
    await this.promisedSetState({
      visible: false
    })
    this.refDialog.close()
    if (Dialog.onHide) {
      Dialog.onHide()
    }
    Dialog.onHide = null
  }

  render () {
    return (
      <Modal
        ref={c => this.refDialog = c}
        position='center'
        swipeToClose={false}
        backdropPressToClose={false}
        style={styles.modalContainer}
      >
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle} />
          {
                        this.state.visibleBtnCancel
                          ? (
                            <Button onPress={this.hideDialog} style={styles.modalHeaderBtn}>
                              <Icon name='close' type='AntDesign' style={styles.modalHeaderIcon} />
                            </Button>
                            )
                          : null
                    }
        </View>
        <ScrollView contentContainerStyle={styles.modalContent}>
          <Icon name={iconName} type='AntDesign' style={styles.modalContentIcon} />
          <Text style={styles.modalContentTitle}>{this.state.title || __(defaultTitle)}</Text>
          <Text style={styles.modalContentDesc}>{this.state.message}</Text>
          {
                        this.state.visibleBtnOk
                          ? (
                            <Button success onPress={this.hideDialog}>
                              <Text>{this.state.labelBtnOk || __(defaultLabelBtnOk)}</Text>
                            </Button>
                            )
                          : null
                    }
        </ScrollView>
      </Modal>
    )
  }
}

export default Dialog
