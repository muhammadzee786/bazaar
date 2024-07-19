import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from '@component/Basic'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
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

  renderItem({ item,index }) {
    return (
      <Item
        item={item}
        index={index}
        openGalleryImage={this.props.openGalleryImage}
      />
    )
  }

  render() {
    return (
      <>
        <View style={styles.postRow}>
          <Text style={styles.postSubTitle}>{__('Photos')}</Text>
        </View>
        <View style={styles.postPhotos}>
          <FlatList
            numColumns={3}
            data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
            showsHorizontalScrollIndicator={false}
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          />
        </View>

      </>
    )
  }
}
