import React, { memo, useState } from 'react'
import { View } from 'react-native'

import { Picker } from '@component/Form'
import styles from './../../../styles'


const FieldSelect = ({ field, fieldName, value, onChange }) => {
  const [items] = useState(
    field.options.map(op => ({ label: op.value, value: op.id }))
  )
  const _onChange = v => onChange(fieldName, v ? v.toString() : '')
  return (
    <View style={styles.customPicker}>
      <Picker
        items={items}
        value={value}
        onChange={_onChange}
      />
    </View>
  )
}

export default memo(FieldSelect)
