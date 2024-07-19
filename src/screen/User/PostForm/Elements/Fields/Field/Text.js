import React, {memo} from 'react';
import {TextInput} from 'react-native';

import styles from './../../../styles'

const FieldText = ({fieldName, value, handleChange, handleBlur}) => {
  return (
    <TextInput
      value={value}
      onChangeText={handleChange(fieldName)}
      onBlur={handleBlur(fieldName)}
      style={styles.postInput}
    />
  );
};

export default memo(FieldText);
