import React from 'react'
import { Image, View } from 'react-native'
import { Text, Icon } from '@component/Basic'

import styles from '../styles'
import { STORAGE_URL } from '@config/env'
import { Button } from '@component/Form'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.openGalleryImage = this.openGalleryImage.bind(this)
  }

  openGalleryImage () {
    this.props.openGalleryImage(this.props.index)
  }

  render () {
    const item = this.props.item

    return (
      <>
        <Button style={styles.postPhotoBtn} underlayColor='transparent' onPress={this.openGalleryImage}>
          <Image source={{ uri: STORAGE_URL + '/' + item.filename }} style={styles.postPhotoImg} />
        </Button>
      </>
    )
  }
}
