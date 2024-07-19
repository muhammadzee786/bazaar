import React, { useContext, useState } from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import {
  TextInput
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from '../styles'
import ContextMap from '../ContextMap'

const Title = () => {
  const { formSettings, values, handleChange, handleBlur } = useContext(ContextMap)

  const [minLength] = useState(parseInt(formSettings.title_min_length, 10))
  const [maxLength] = useState(parseInt(formSettings.title_max_length, 10))

  return (
    <View style={styles.content}>
      <View style={styles.postRow}>
        <Text style={styles.postLabel}>{__('Ad Name')}</Text>
      </View>
      <View style={styles.postGroup}>
        <TextInput
          placeholder={__('Minimum ' + minLength + ' characters')}
          placeholderTextColor='rgba(0,0,0,0.5)'
          maxLength={maxLength}
          value={values.title}
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          style={styles.postInput}
        />
      </View>
    </View>
  )
}

export default Title
