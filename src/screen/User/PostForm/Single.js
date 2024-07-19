import React from 'react'
import { View } from 'react-native'

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

const Single = () => {
  return (
    <View style={styles.container}>
      <ElementCategory />
      <ElementPostType />
      <ElementName />
      <ElementDescription />
      <ElementPrice />
      <ElementCity />
      <ElementFields />
      <ElementContact />
      <ElementPictures />

      <ButtonSave />
    </View>
  )
}

export default Single
