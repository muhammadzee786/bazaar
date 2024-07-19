import React, { useContext } from 'react'
import { View } from 'react-native'
import ContextMap from '../../ContextMap'

import styles from './../../styles'
import Item from './Item'

const List = () => {
  const { images, removeImage } = useContext(ContextMap)

  if (images.length == 0) {
    return null
  }

  const renderImageItem = (item, index) => (<Item item={item} index={index} removeImage={removeImage} />)

  return (
    <View style={styles.content}>
      <View style={styles.photo}>
        {images.map(renderImageItem)}
      </View>
    </View>
  )
}

export default List
