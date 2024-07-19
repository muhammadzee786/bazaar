import React, { memo } from 'react'
import { TextInput } from 'react-native'

import styles from './../../../styles'

const FieldTextArea = ({ fieldName, value, handleChange, handleBlur }) => {
  return (
    <TextInput
      multiline
      value={value}
      onChangeText={handleChange(fieldName)}
      onBlur={handleBlur(fieldName)}
      style={styles.postInputMulti}
    />
  )
}

export default memo(FieldTextArea)
