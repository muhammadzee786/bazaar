import React, { useContext } from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import {
  Picker
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from '../styles'
import ContextMap from '../ContextMap'

const PostType = () => {
  const { postTypes, values, handleChange, handleBlur, formSettings } = useContext(ContextMap)
  if (!formSettings?.show_listing_types) {
    return null
  }

  return (
    <>
      <View style={styles.content}>
        <View style={styles.postRow}>
          <Text style={styles.postLabel}>{__('Post Types')}</Text>
        </View>
        <View style={styles.postSelect}>
          <Picker
            items={postTypes}
            value={values.post_type_id}
            onChange={v => handleChange('post_type_id')(v ? v.toString() : '')}
            onBlur={handleBlur('post_type_id')}
          />
        </View>
      </View>
    </>
  )
}

export default PostType
