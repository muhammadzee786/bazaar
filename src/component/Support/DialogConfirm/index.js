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
  labelBtnNo: '',
  labelBtnYes: ''
}

const iconName = 'exclamationcircle'
const defaultTitle = 'Confirm'
const defaultLabelBtnNo = 'No'
const defaultLabelBtnYes = 'Yes'

class Dialog extends React.PureComponent {
  static instance
  static onYes
  static onNo

  constructor (props) {
    super(props)

    this.state = { ...config }

    bind(this)

    this.showDialog = this.showDialog.bind(this)
    this.hideDialog = this.hideDialog.bind(this)
    this.onClickYes = this.onClickYes.bind(this)
    this.onClickNo = this.onClickNo.bind(this)
  }

  async showDialog (c) {
    const { onYes, onNo, ...c_ } = c
    const config_ = { 
      ...config,
      labelBtnNo: __(config.labelBtnNo),
      labelBtnYes: __(config.labelBtnYes),
      ...c_ 
    }
    config_.visible = true
    Dialog.onYes = onYes
    Dialog.onNo = onNo
    await this.promisedSetState(config_)
    this.refDialog.open()
  }

  async hideDialog () {
    await this.promisedSetState({
      visible: false
    })
    Dialog.onYes = null
    Dialog.onNo = null
    this.refDialog.close()
  }

  async onClickYes () {
    if (Dialog.onYes) {
      Dialog.onYes()
    }
    await this.hideDialog()
  }

  async onClickNo () {
    if (Dialog.onNo) {
      Dialog.onNo()
    }
    await this.hideDialog()
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
        </View>
        <ScrollView contentContainerStyle={styles.modalContent}>
          {/* }<Icon name={iconName} type='AntDesign' style={styles.modalContentIcon} />{ */}
          <Text style={styles.modalContentTitle}>{this.state.title || __(defaultTitle)}</Text>
          <Text style={styles.modalContentDesc}>{this.state.message}</Text>
          <View style={styles.modalCol}>
            <Button style={styles.noBtn} block={false} onPress={this.onClickNo}>
              <Text style={styles.noBtnText}>{this.state.labelBtnNo || __(defaultLabelBtnNo)}</Text>
            </Button>
            <Button style={styles.yesBtn} block={false} onPress={this.onClickYes}>
              <Text style={styles.yesBtnText}>{this.state.labelBtnYes || __(defaultLabelBtnYes)}</Text>
            </Button>
          </View>
        </ScrollView>
      </Modal>
    )
  }
}

export default Dialog
