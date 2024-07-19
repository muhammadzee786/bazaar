import React from 'react'
import { View } from 'react-native'

import { Text } from '@component/Basic'
import { __ } from '@utility/translation'

import styles from './styles'
import ElementCategory from './Elements/Category'
import ElementPostType from './Elements/PostType'
import ElementName from './Elements/Title'
import ElementDescription from './Elements/Description'
import ElementPrice from './Elements/Price'
import ElementCity from './Elements/City'
import ElementContact from './Elements/Contact'
import ElementFields from './Elements/Fields'
import ElementPictures from './Elements/Pictures'
import ButtonSave from './ButtonSave'

const Multi = ({ multiType }) => {
  const renderOverview = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.stepHeader}>{__('STEP 1. Overview')}</Text>
        </View>

        <ElementCategory />
        <ElementPostType />
        <ElementName />
        <ElementDescription />
        <ElementPrice />
        <ElementCity />
        <ElementFields />
        <ElementContact />

        <ButtonSave />
      </View>
    )
  }
  const renderPictures = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.stepHeader}>{__('STEP 2. Photos')}</Text>
        </View>

        <ElementPictures isMulti />

        <ButtonSave />
      </View>
    )
  }
  if (multiType === 'overview') {
    return renderOverview()
  } else if (multiType === 'pictures') {
    return renderPictures()
  }
  return null
}

export default Multi
