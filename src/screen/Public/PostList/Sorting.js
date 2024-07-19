import React from 'react'
import { Text } from 'react-native'
import Modal from 'react-native-modalbox'

import styles from './styles'

import { Button } from '@component/Form'
import Header from '@component/Header'
import Support from '@component/Support'
import { sortings } from '@config/filters'
import { URLS } from '@config/url'
import theme from '@theme/styles'
import { bind } from '@utility/component'
import http from '@utility/http'
import { __ } from '@utility/translation'
import { Icon } from '@component/Basic'

class Sorting extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      url: '',
      filters: {}
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.apply = this.apply.bind(this)
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

  async open (filters) {
    await Support.showLoading()
    await this.promisedSetState({ filters })
    await Support.hideLoading()
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  async apply (orderBy) {
    await this.refModal.close()
    await this.props.apply({ ...this.state.filters, orderBy })
  }

  renderContent () {
    const keys = Object.keys(sortings)
    const length = keys.length
    return keys.map((k, i) => {
      const styleTitle = [styles.sortByBtnText]
      let icon
      if (k === this.state.filters.orderBy) {
        styleTitle.push(styles.sortByBtnActiveText)

        icon = <Icon name='check' type='Feather' style={styles.sortByBtnIcon} />
      }
      return (
        <Button
          key={k}
          style={i + 1 === length ? [styles.sortByBtn, styles.sortByBtnLast] : styles.sortByBtn}
          onPress={() => this.apply(k)}
        >
          <Text style={styleTitle}>{__(sortings[k].name)}</Text>
          {icon}
        </Button>
      )
    })
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='center'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        // coverScreen
        style={styles.sortBy}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default Sorting
