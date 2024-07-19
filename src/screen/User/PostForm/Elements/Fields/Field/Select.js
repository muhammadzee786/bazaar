import React, { memo, useState } from 'react'
import { View } from 'react-native'

import { Picker } from '@component/Form'
import styles from './../../../styles'

const FieldSelect = ({ field, fieldName, value, handleChange, handleBlur }) => {
  const [items] = useState(
    field.options.map(op => ({ label: op.value, value: op.id }))
  )
  const onChange = v => handleChange(fieldName)(v ? v.toString() : '')
  return (
    <View style={styles.postPicker}>
      <Picker
        items={items}
        value={value}
        onChange={onChange}
        onBlur={handleBlur(fieldName)}
      />
    </View>
  )
}

export default memo(FieldSelect)
