import React, { useContext, useState } from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import {
  TextInput
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from '../styles'
import ContextMap from '../ContextMap'

const Description = () => {
  const { formSettings, values, handleChange, handleBlur } = useContext(ContextMap)

  const [minLength] = useState(parseInt(formSettings.description_min_length, 10))
  const [maxLength] = useState(parseInt(formSettings.description_max_length, 10))

  return (
    <View style={styles.content}>
      <View style={styles.postRow}>
        <Text style={styles.postLabel}>{__('Description')}</Text>
      </View>
      <View style={styles.postGroup}>
        <TextInput
          placeholder={__('Minimum ' + minLength + ' characters')}
          placeholderTextColor='rgba(0,0,0,0.5)'
          maxLength={maxLength}
          multiline
          numberOfLines={8}
          value={values.description}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          style={styles.postInputMulti}
        />
      </View>
    </View>
  )
}

export default Description
