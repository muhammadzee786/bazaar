import React from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '@component/Form'
import { navigate, openDrawer } from '@navigation'
import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { Icon } from './Basic'

const isActive = (currentScreen, name) => (currentScreen == name)

const sessionRoutes = ['UserMyAccount', 'UserPostCreate', 'UserFavouriteList']

const Item = (props) => {
  return (
    <Button
      style={props.isActive ? [styles.btn, styles.btnActive] : styles.btn}
      onPress={() => {
        if (props.routeName == 'MORE') {
          openDrawer()
        } else {
          if (sessionRoutes.includes(props.routeName) && !props.session.isLoggedIn) {
            return navigate('UserLogin')
          }
          navigate(props.routeName)
        }
      }}
    >
      {
      props.icon
        ? (<Icon name={props.icon.name} type={props.icon.type} style={[styles.icon, props.isActive ? styles.iconActive: null, props.icon.style]} />)
        : null
    }
      {
        props.img
          ? (<Image source={props.img} resizeMode='contain' style={props.imgStyle} />)
          : null
      }
      {
        props.text
          ? (<Text style={props.isActive ? [styles.text, styles.textActive] : styles.text}>{props.text.name}</Text>)
          : null
      }
    </Button>
  )
}

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Item
          isActive={isActive(props.currentScreen, 'PublicHome')}
          routeName='PublicHome'
          icon={{ name: 'home', type: 'Octicons' }}
          text={{ name: 'Home' }}
        />
        <Item
          isActive={isActive(props.currentScreen, 'PublicPostList')}
          routeName='PublicPostList'
          icon={{ name: 'grid', type: 'Feather' }}
          text={{ name: 'List' }}
        />
        <View style={styles.primary}>
          <View style={styles.primaryBtn}>
            <Item
              isActive={isActive(props.currentScreen, 'UserPostForm')}
              routeName='UserPostCreate'
              icon={{ name: 'plus', type: 'Entypo', style:styles.light }}
              text={{ name: 'Detail' }}
              session={props.session}
            />
          </View>
        </View>
        <Item
          isActive={isActive(props.currentScreen, 'UserMessageList')}
          routeName='UserMessageList'
          icon={{ name: 'bubbles', type: 'SimpleLineIcons' }}
          text={{ name: 'Fav' }}
          session={props.session}
        />
        <Item
          isActive={isActive(props.currentScreen, 'UserMyAccount')}
          routeName='UserMyAccount'
          icon={{ name: 'user', type: 'AntDesign' }}
          text={{ name: 'Profile' }}
          session={props.session}
        />
      </View>
    </View>
  )
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 3,
    backgroundColor: COLOR.LIGHT
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLOR.LIGHT
  },
  btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 15
  },
  icon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  text: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginHorizontal: 5,
    display: 'none'
  },
  btnActive: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconActive: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginBottom: 5
  },
  textActive: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    display: 'none'
  },
  primary: {
    width: 80,
    position: 'relative'
  },
  primaryBtn: {
    width: 80,
    height: 80,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: COLOR.PRIMARY,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  light: {
    color: COLOR.LIGHT
  }
}

export default connect(({ session }) => ({ session }))(Footer)
