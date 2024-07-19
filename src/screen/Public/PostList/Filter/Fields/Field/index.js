import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './../../../styles'
import FieldSelect from './Select'
import FieldRadio from './Radio'
import FieldCheckbox from './Checkbox'

const Field = ({
  field,
  fieldName,
  value,
  onChange
}) => {
  let Input = null
  switch (field.type) {
    case 'select':
      Input = FieldSelect
      break
    case 'radio':
      Input = FieldRadio
      break
    case 'checkbox_multiple':
      Input = FieldCheckbox
      break
  }
  return Input
    ? (
      <View key={field.id} style={styles.custom}>
        <View style={styles.customHeader}>
          <Text style={styles.customHeaderTitle}>{field.name}</Text>        
        </View>
        <View style={styles.customContent}>
          <Input
            field={field}
            fieldName={fieldName}
            value={value}
            onChange={onChange}
          />
        </View>
      </View>
      )
    : null
}

export default memo(Field)
