import React from 'react'
import { Dimensions, Platform, View } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

import themePlatform from '@theme/platform'
import { COLOR } from '@theme/typography'

const Icon = (props) => {
  const { type, ..._props } = props

  let C = null

  switch (type) {
    case 'AntDesign':
      C = AntDesign
      break
    case 'Entypo':
      C = Entypo
      break
    case 'EvilIcons':
      C = EvilIcons
      break
    case 'Feather':
      C = Feather
      break
    case 'FontAwesome':
      C = FontAwesome
      break
    case 'FontAwesome5':
      C = FontAwesome5
      break
    case 'Fontisto':
      C = Fontisto
      break
    case 'Foundation':
      C = Foundation
      break
    case 'Ionicons':
      C = Ionicons
      break
    case 'MaterialCommunityIcons':
      C = MaterialCommunityIcons
      break
    case 'MaterialIcons':
      C = MaterialIcons
      break
    case 'Octicons':
      C = Octicons
      break
    case 'SimpleLineIcons':
      C = SimpleLineIcons
      break
    case 'Zocial':
      C = Zocial
      break
  }

  if (C === null) {
    return null
  }

  _props.style = _props.style ? [styles.icon, _props.style] : styles.icon

  return <C {..._props} />
}

const styles = {
  icon: {
    fontSize: themePlatform.iconFontSize,
    color: COLOR.icon
  }
}

export default Icon
