import React from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@component/Basic'
import { Button, TextInput } from '@component/Form'
import { __ } from '@utility/translation'
import styles from './styles'

const Setting = () => {
  return (
    <>
      <View style={styles.formRow}>
        <View style={styles.row}>
          <Text style={styles.formLabel}>{__('New Password')}</Text>
        </View>
        <View style={styles.formGroup}>
          <TextInput style={styles.formInput} />
        </View>
      </View>
      <View style={styles.formRow}>
        <View style={styles.row}>
          <Text style={styles.formLabel}>{__('Confirm New Password')}</Text>
        </View>
        <View style={styles.formGroup}>
          <TextInput style={styles.formInput} />
        </View>
      </View>
      <View style={styles.formRow}>
        <View style={styles.row}>
          <Text style={styles.formLabel}>{__(' Preferred Time Zone ')}</Text>
        </View>
        <View style={styles.formGroup}>
          <TextInput style={styles.formInput} />
        </View>
      </View>
      <Button style={styles.formBtn}>
        <Text style={styles.formBtnText}>{__('Update')}</Text>
        <Icon name='arrow-right' type='Feather' style={styles.formBtnIcon} />
      </Button>
    </>
  )
}

export default Setting
