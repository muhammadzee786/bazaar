import React, { useContext } from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import {
  Picker
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from '../styles'
import ContextMap from '../ContextMap'

const City = () => {
  const { cities, values, handleChange, handleBlur } = useContext(ContextMap)

  return (
    <View style={styles.content}>
      <View style={styles.postRow}>
        <Text style={styles.postLabel}>{__('City')}</Text>
      </View>
      <View style={styles.postSelect}>
        <Picker
          items={cities}
          value={values.city_id}
          onChange={v => handleChange('city_id')(v ? v.toString() : '')}
          onBlur={handleBlur('city_id')}
        />
      </View>
    </View>
  )
}

export default City
