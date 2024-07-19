import React from 'react'
import { Text } from 'react-native'

import { RadioButton } from '@component/Form'
import styles from './../styles'

const Item = ({ item, gender_id, handleChange }) => {
  console.log('gender_id', gender_id)
  const checked = gender_id == item.value
  const onChange = () => handleChange('gender_id')(item.value)
  return (
    <RadioButton
      style={styles.formGender}
      suffix={<Text style={styles.formGenderLabel}>{item.label}</Text>}
      checked={checked}
      onChange={onChange}
    />
  )
}

const Gender = ({ list, gender_id, handleChange }) => {
  const renderItem = (item) => (
    <Item
      item={item}
      gender_id={gender_id}
      handleChange={handleChange}
    />
  )
  return list.map(renderItem)
}

export default Gender
