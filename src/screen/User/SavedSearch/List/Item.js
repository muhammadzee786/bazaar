import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from '@component/Basic'

import { Button } from '@component/Form'
import styles from '../styles'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    const onDelete = () => this.props.onDelete(item.id, this.props.index)

    return (
      <View style={styles.item}>
        <Button style={styles.itemCol}>
          <Text style={styles.itemName}>{item.keyword}</Text>
        </Button>
        <Button style={styles.itemBtn} onPress={onDelete}>
          <Icon name='trash' type='Feather' style={styles.itemBtnIcon} />
        </Button>
      </View>
    )
  }
}