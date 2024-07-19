import React, { useContext } from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import {
  TextInput,
  Checkbox
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from '../styles'
import ContextMap from '../ContextMap'

const Contact = () => {
  const { values, handleChange, handleBlur, setFieldValue } = useContext(ContextMap)

  return (
    <>
      <View style={styles.content}>
        <View style={styles.postRow}>
          <Text style={styles.postLabel}>{__('Contact Name')}</Text>
        </View>
        <View style={styles.postGroup}>
          <TextInput
            placeholderTextColor='rgba(0,0,0,0.5)'
            value={values.contact_name}
            onChangeText={handleChange('contact_name')}
            onBlur={handleBlur('contact_name')}
            style={styles.postInput}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.postRow}>
          <Text style={styles.postLabel}>{__('Contact Email')}</Text>
        </View>
        <View style={styles.postGroup}>
          <TextInput
            placeholderTextColor='rgba(0,0,0,0.5)'
            keyboardType='email-address'
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            style={styles.postInput}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.postRow}>
          <Text style={styles.postLabel}>{__('Contact Phone')}</Text>
        </View>
        <View style={styles.postGroup}>
          <TextInput
            placeholderTextColor='rgba(0,0,0,0.5)'          
            keyboardType='phone-pad'
            value={values.phone}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            style={styles.postInput}
          />
        </View>
        <View style={styles.postRow}>
          <Checkbox
            checked={values.phone_hidden}
            onChange={() =>
              setFieldValue('phone_hidden', values.phone_hidden ? 0 : 1)}
          />
          <Text style={styles.postDesc}>{__('Hide')}</Text>
        </View>
      </View>
    </>
  )
}

export default Contact
