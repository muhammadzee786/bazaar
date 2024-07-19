import React, { memo, useState } from 'react'
import { Text, View } from 'react-native'

import { RadioButton } from '@component/Form'
import styles from './../../../styles'

const FieldSelect = ({ field, fieldName, value, handleChange, handleBlur }) => {
  const [items] = useState(
    field.options.map(op => ({ label: op.value, value: op.id }))
  )
  return items.map(item => {
    const checked = item.value == value
    const onChange = () =>
      handleChange(fieldName)((item.value || '').toString())
    return (
      <View style={styles.postCustomRow} key={item.value}>
        <RadioButton checked={checked} onChange={onChange} />
        <Text style={styles.postCustomLabel}>{item.label}</Text>
      </View>
    )
  })
}

export default memo(FieldSelect)
