import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './../../../styles'
import FieldText from './Text'
import FieldTextArea from './TextArea'
import FieldSelect from './Select'
import FieldRadio from './Radio'
import FieldCheckbox from './Checkbox'
import FieldDate from './Date'

const Field = ({
  field,
  fieldName,
  value,
  handleChange,
  handleBlur,
  setFieldValue
}) => {
  let Input = null
  switch (field.type) {
    case 'text':
    case 'number':
      Input = FieldText
      break
    case 'textarea':
      Input = FieldTextArea
      break
    case 'select':
      Input = FieldSelect
      break
    case 'radio':
      Input = FieldRadio
      break
    case 'checkbox_multiple':
      Input = FieldCheckbox
      break
    case 'date':
      Input = FieldDate
      break
  }
  return Input
    ? (
      <View key={field.id} style={styles.content}>
        <View style={styles.postRow}>
          <Text style={styles.postLabel}>{field.name}</Text>
        </View>
        <View style={styles.postGroup}>
          <Input
            field={field}
            fieldName={fieldName}
            value={value}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />
        </View>
      </View>
      )
    : null
}

export default memo(Field)
