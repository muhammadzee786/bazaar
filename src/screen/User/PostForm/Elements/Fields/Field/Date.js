import React, { memo } from 'react'
import { View } from 'react-native'
import { DatePicker } from '@component/Form'

import styles from './../../../styles'


const FieldText = ({ fieldName, value, handleChange, handleBlur }) => {
  return (
    <View style={styles.postSelect}>
      <DatePicker
        style={styles.inputText}
        value={value}
        onChangeText={handleChange(fieldName)}
        onBlur={handleBlur(fieldName)}
      />
    </View>
  )
}

export default memo(FieldText)
