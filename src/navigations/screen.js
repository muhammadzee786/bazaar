import React from 'react'
import { Dimensions, I18nManager } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { useFlipper } from '@react-navigation/devtools'

import DrawerLeft from '@component/Drawer/Left'
import {
  navigationRef,
  onReady,
  onStateChange,
  onLastScreenLeave
} from '@navigation'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const { width } = Dimensions.get('window')

const WIDTH_DRAWER = width * 0.78

const listeners = ({ navigation, route }) => ({
  beforeRemove: e => {
    if (e.data.action.type === 'GO_BACK') {
      onLastScreenLeave(e)
    }
  }
})

const DrawerNav = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerWidth: WIDTH_DRAWER,
        drawerStyle: { width: '90%' },
        drawerPosition: I18nManager.isRTL ? 'right' : 'left',
        drawerType: 'front',
        unmountOnBlur: true
      }}
      drawerContent={props => <DrawerLeft {...props} />}
      minSwipeDistance={width}
    >
      <Drawer.Screen
        name='PublicHome'
        component={require('@screen/Public/Home').default}
      />
    </Drawer.Navigator>
  )
}

const NavRoot = ({ navigation }) => {
  return null
}

const Navigator = () => {
  // useFlipper(navigationRef)
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='NavRoot'
        screenListeners={listeners}
      >
        <Stack.Screen name='NavRoot' component={NavRoot} />
        <Stack.Screen name='DrawerNav' component={DrawerNav} />
        <Stack.Screen
          name='PublicLanguage'
          component={require('@screen/Public/Language').default}
        />

        <Stack.Screen
          name='PublicPostList'
          component={require('@screen/Public/PostList').default}
        />
        <Stack.Screen
          name='PublicPostView'
          component={require('@screen/Public/PostView').default}
        />
        <Stack.Screen
          name='PublicContact'
          component={require('@screen/Public/Contact').default}
        />
        <Stack.Screen
          name='PublicPageList'
          component={require('@screen/Public/PageList').default}
        />
        <Stack.Screen
          name='PublicPageView'
          component={require('@screen/Public/PageView').default}
        />

        <Stack.Screen
          name='UserLogin'
          component={require('@screen/User/Login').default}
        />
        <Stack.Screen
          name='UserRegister'
          component={require('@screen/User/Register').default}
        />
        <Stack.Screen
          name='UserPasswordForgot'
          component={require('@screen/User/PasswordForgot').default}
        />
        <Stack.Screen
          name='UserLogout'
          component={require('@screen/User/Logout').default}
        />

        <Stack.Screen
          name='UserPostList'
          component={require('@screen/User/PostList').default}
        />
        <Stack.Screen
          name='UserFavouriteList'
          component={require('@screen/User/FavouriteList').default}
        />
        <Stack.Screen
          name='UserSavedSearch'
          component={require('@screen/User/SavedSearch').default}
        />
        <Stack.Screen
          name='UserPostCreate'
          component={require('@screen/User/PostForm').default}
        />
        <Stack.Screen
          name='UserPostUpdate'
          component={require('@screen/User/PostForm').default}
        />
        <Stack.Screen
          name='UserTransactionList'
          component={require('@screen/User/TransactionList').default}
        />
        <Stack.Screen
          name='UserMessageList'
          component={require('@screen/User/MessageList').default}
        />
        <Stack.Screen
          name='UserMessageView'
          component={require('@screen/User/MessageView').default}
        />
        <Stack.Screen
          name='UserMyAccount'
          component={require('@screen/User/MyAccount').default}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
