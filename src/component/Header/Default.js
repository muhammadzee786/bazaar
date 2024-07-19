import React from 'react'
import { Platform, View, Text } from 'react-native'

import { Icon } from '@component/Basic'
import { Button } from '@component/Form'
import { goBack, openDrawer } from '@navigation'
import themePlatform from '@theme/platform'
import { COLOR, SIZE } from '@theme/typography'

const Left = (props) => {
  let C
  if (props.leftContent) {
    C = props.leftContent
  } else if (props.leftType === 'menu') {
    C = (
      <Button style={styles.menuBtn} onPress={openDrawer}>
        <Icon name='sort' type='MaterialIcons' style={styles.menuBtnIcon} />
      </Button>
    )
  } else if (props.leftType === 'back') {
    C = (
      <Button style={styles.backBtn} onPress={goBack}>
        <Icon name='arrow-left' type='Feather' style={styles.backBtnIcon} />
      </Button>
    )
  } else if (props.leftType === 'backarrow') {
    C = (
      <Button style={styles.backBtn} onPress={goBack}>
        <Icon name='arrow-left' type='Feather' style={[styles.backBtnIcon, styles.dark]} />
      </Button>
    )
  }
  return (
    <View style={props.leftStyle ? [styles.left, props.leftStyle] : styles.left}>
      {C}
    </View>
  )
}

const Middle = (props) => {
  let C
  if (props.middleContent) {
    C = props.middleContent
  } else if (props.title) {
    const titleStyle = []
    if (props.titleAlign) {
      titleStyle.push(styles[props.titleAlign])
    }
    if (props.titleColor) {
      titleStyle.push(styles[props.titleColor])
    }
    C = <Text style={titleStyle}>{props.title}</Text>
  }
  return (
    <View style={props.middleStyle ? [styles.middle, props.middleStyle] : styles.middle}>
      {C}
    </View>
  )
}

const Right = (props) => {
  let C
  if (props.rightContent) {
    C = props.rightContent
  }
  return (
    <View style={props.rightStyle ? [styles.right, props.rightStyle] : styles.right}>
      {C}
    </View>
  )
}

const Header = ({ variant = 'default', ...props }) => {
  const cs = { ...styles.container }
  if (variant === 'default') {
    cs.backgroundColor = COLOR.DEFAULT
  }
  else if (variant === 'primary') {
    cs.backgroundColor = COLOR.PRIMARY
  }
  else if (variant === 'secondary') {
    cs.backgroundColor = COLOR.LIGHT
  }
  return (
    <View style={props.style ? [cs, props.style] : cs}>
      <Left {...props} variant={variant} />
      <Middle {...props} variant={variant} />
      <Right {...props} variant={variant} />
    </View>
  )
}

const containerHeight = Platform.OS === 'ios' ? themePlatform.toolbarHeight + 10 : themePlatform.toolbarHeight

const styles = {
  container: {
    flexDirection: 'row',
    height: 48
  },
  left: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flex: 7,
    justifyContent: 'center'
  },
  right: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  light: {
    color: COLOR.LIGHT
  },
  dark: {
    color: COLOR.DARK
  },
  menuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 15
  },
  menuBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 15
  },
  backBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },

}

export default Header