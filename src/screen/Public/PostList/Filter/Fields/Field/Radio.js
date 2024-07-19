import React, { memo, useState } from 'react'
import { Text, View } from 'react-native'

import { RadioButton } from '@component/Form'
import styles from './../../../styles'

const FieldSelect = ({ field, fieldName, value, onChange }) => {
  const [items] = useState(
    field.options.map(op => ({ label: op.value, value: op.id }))
  )
  return items.map(item => {
    const checked = item.value == value
    const _onChange = () =>
      onChange(fieldName, (item.value || '').toString())
    return (
      <View style={styles.customRow} key={item.value}>
        <RadioButton checked={checked} onChange={_onChange} />
        <Text style={styles.customText}>{item.label}</Text>
      </View>
    )
  })
}

export default memo(FieldSelect)
