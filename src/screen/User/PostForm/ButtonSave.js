import React, { useContext } from 'react'
import { View } from 'react-native'

import { Text, Icon } from '@component/Basic'
import {
  Button
} from '@component/Form'
import { __ } from '@utility/translation'

import styles from './styles'
import ContextMap from './ContextMap'

const ButtonSave = () => {
  const { submitForm } = useContext(ContextMap)

  return (
    <View style={styles.footer}>
      <Button style={styles.btn} onPress={submitForm}>
        <Icon name='check' type='MaterialIcons'  style={styles.btnIcon} />
        <Text style={styles.btnText}>{__('Save')}</Text>
      </Button>
    </View>
  )
}

export default ButtonSave
