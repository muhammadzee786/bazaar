import React from 'react'
import { FlatList, TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@component/Basic'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

import theme from '@theme/styles'
import { navigate } from '@navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate() {
    return <Placeholder />
  }

  renderItem({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
        onDelete={this.props.onDelete}
      />
    )
  }

  render() {
    return (
      <>
        <View style={styles.similarContainer}>
          <View style={styles.similarHeader}>
            <View style={styles.similarCol}>
              <Text style={styles.similarTitle}>{__('Similar Ads')}</Text>
            </View>
          </View>
          <FlatList
            data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
            showsHorizontalScrollIndicator={false}
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          />
        </View>
      </>
    )
  }
}
