import React, { useContext } from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import {
  TextInput
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from '../styles'
import ContextMap from '../ContextMap'

const Price = () => {
  const { values, handleChange, handleBlur } = useContext(ContextMap)

  return (
    <View style={styles.content}>
      <View style={styles.postRow}>
        <Text style={styles.postLabel}>{__('Price')}</Text>
      </View>
      <View style={styles.postGroup}>
        <TextInput
          placeholder='e.g. 100000'
          placeholderTextColor='rgba(0,0,0,0.5)'
          value={values?.price}
          onChangeText={handleChange('price')}
          onBlur={handleBlur('price')}
          style={styles.postInput}
        />
      </View>
    </View>
  )
}

export default Price
