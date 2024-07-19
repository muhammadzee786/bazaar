import React, { useContext } from 'react'
import { View } from 'react-native'

import { Text, Icon } from '@component/Basic'
import {
  Button
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from './../../styles'
import List from './List'
import ContextMap from '../../ContextMap'

const Pictures = ({ isMulti }) => {
  const { selectImage } = useContext(ContextMap)

  return (
    <>
      {
      !isMulti
        ? (
          <View style={styles.postPhoto}>
            <Text style={styles.postPhotoTitle}>{__('Photos')}</Text>
          </View>
          )
        : null
    }
      <View style={styles.postPhotoUpload}>
        <Button style={styles.postPhotoBtn} onPress={selectImage}>
          <Icon name='upload' type='Feather' style={styles.postPhotoBtnIcon} />
          <Text style={styles.postPhotoBtnText}>{__('Upload Photos')}</Text>
        </Button>
      </View>

      <List />
    </>
  )
}

export default Pictures
