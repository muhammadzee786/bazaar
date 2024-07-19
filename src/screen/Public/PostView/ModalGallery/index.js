import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Icon } from '@component/Basic'

import Modal from 'react-native-modalbox'
import styles from '../styles'
import { bind } from '@utility/component'
import { STORAGE_URL } from '@config/env'
import { Button } from '@component/Form'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      index: -1
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  close () {
    this.refModalGallery.close()
  }

  open (index) {
    this.setState({
      index
    }, () => {
      this.refModalGallery.open()
    })
  }

  renderContent () {
    return (
      <View>
        {
          this.props.list[this.state.index]
            ? (
              <Image
                source={{ uri: STORAGE_URL + '/' + this.props.list[this.state.index].filename }}
                style={styles.modalImg}
                resizeMode='contain'
              />
              )
            : null
        }

        <View style={styles.modalHeader}>
          <Button style={styles.modalHeaderBtn} onPress={() => this.refModalGallery.close()}>
            <Icon name='close' type='MaterialIcons' style={styles.modalHeaderBtnIcon} />
          </Button>
        </View>
        <View style={styles.modalContent}>
          <View style={styles.modalLeft}>
            {
              this.state.index > 0
                ? (
                  <Button
                    onPress={() => {
                      let index = this.state.index - 1
                      if (index < 0) {
                        index = this.props.list.length - 1
                      }
                      this.setState({ index })
                    }}
                    style={styles.modalBtn}
                  >
                    <Icon name='arrow-left' type='SimpleLineIcons' style={styles.modalBtnIcon} />
                  </Button>
                  )
                : <View />
            }
          </View>
          <View style={styles.modalRight}>
            {
              this.state.index < this.props.list.length - 1
                ? (
                  <Button
                    onPress={() => {
                      let index = this.state.index + 1
                      if (index >= this.props.list.length) {
                        index = 0
                      }
                      this.setState({ index })
                    }}
                    style={styles.modalBtn}
                  >
                    <Icon name='arrow-right' type='SimpleLineIcons' style={styles.modalBtnIcon} />
                  </Button>
                  )
                : <View />
            }
          </View>
        </View>
      </View>
    )
  }

  render () {
    return (
      <Modal
        ref={r => (this.refModalGallery = r)}
        position='center'
        style={styles.mGallery}
        backButtonClose
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}
