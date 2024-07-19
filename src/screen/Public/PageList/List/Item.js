import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from '@component/Basic'

import { Button } from '@component/Form'
import styles from '../styles'
import { __ } from '@utility/translation'
import { navigate } from '@navigation/'

export default class extends React.Component {
  render () {
    const item = this.props.item

    const onView = () => navigate('PublicPageView', { slug: item.slug })

    return (
      <View style={styles.item}>
        <Button style={styles.itemCol} onPress={onView}>
          <Text style={styles.itemName}>{item.title}</Text>
        </Button>
      </View>
    )
  }
}
