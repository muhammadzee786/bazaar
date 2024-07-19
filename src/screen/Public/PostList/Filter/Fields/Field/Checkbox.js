import React, { memo, useState } from 'react'
import { Text, View } from 'react-native'

import { Checkbox } from '@component/Form'
import styles from './../../../styles'

const FieldCheckbox = ({ field, fieldName, value, onChange }) => {
  const [items] = useState(
    field.options.map(op => ({ label: op.value, value: op.id }))
  )
  const selected = value && value.length ? value : []
  return items.map(item => {
    const sindex = selected.indexOf(item.value)
    const checked = sindex > -1
    const _onChange = () => {
      const s = [...selected]
      if (checked) {
        s.splice(sindex, 1)
      } else {
        s.push(item.value)
      }
      onChange(fieldName, s)
    }
    return (
      <View style={styles.customRow} key={item.value}>
        <Checkbox checked={checked} onChange={_onChange} />
        <Text style={styles.customText}>{item.label}</Text>
      </View>
    )
  })
}

export default memo(FieldCheckbox)
