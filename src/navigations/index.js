import { createRef } from 'react'
import { Alert, BackHandler, NativeModules, Platform } from 'react-native'
import {
  CommonActions,
  DrawerActions,
  StackActions,
  createNavigationContainerRef
} from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import Support from '@component/Support'
import { __ } from '@utility/translation'

export const navigationRef = createNavigationContainerRef()
const routeNameRef = createRef()

let isAppReady = false
let landingScreen = {
  routeName: 'PublicHome',
  params: {}
}

export const setIsAppReady = _isAppReady => {
  isAppReady = _isAppReady
}
export const getIsAppReady = () => isAppReady

export const setLandingScreen = (routeName, params = {}) => {
  landingScreen = {
    routeName,
    params
  }
}
export const getLandingScreen = () => landingScreen

const drawerScreens = ['PublicHome']
const resetScreens = ['PublicHome']

export const navigate = (routeName, params = {}) => {
  if (resetScreens.includes(routeName)) {
    navigateReset(routeName, params)
    return
  }

  let args = []
  if (drawerScreens.includes(routeName)) {
    args = ['DrawerNav', { screen: routeName, params }]
  } else {
    args = [routeName, params]
  }
  const action = StackActions.push(...args)
  navigationRef.dispatch(action)
}

export const navigateReset = (routeName, params = {}) => {
  let routes = [
    {
      name: routeName,
      params
    }
  ]
  if (params.id) {
    routes[0].key = routeName + '-id:' + params.id
  }
  if (drawerScreens.includes(routeName)) {
    routes = [{ name: 'DrawerNav' }]
  }
  navigationRef.resetRoot({
    // index: 0,
    routes,
    stale: true
  })
}

export const navigateCurrent = async (
  routeName,
  params = {},
  excludes = []
) => {
  await navigationRef.dispatch(state => {
    let routes = state.routes
    routes.pop()
    if (routes.length) {
      if (routes[routes.length - 1].name === routeName) {
        routes.pop()
      }

      routes = routes.filter(r => !excludes.includes(r.name))
    }

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1
    })
  })
  let args = []
  if (drawerScreens.includes(routeName)) {
    args = ['DrawerNav', { screen: routeName, params }]
  } else {
    args = [routeName, params]
  }
  const action = StackActions.push(...args)
  await navigationRef.dispatch(action)
}

export const openDrawer = () => {
  console.log('openDrawer')
  navigationRef.dispatch(DrawerActions.toggleDrawer())
}
export const closeDrawer = () => {
  navigationRef.dispatch(DrawerActions.closeDrawer())
}

export const goBack = () => {
  const state = navigationRef?.getRootState()
  if (state.routes.length === 1) {
    if (state.routes[0].name == 'DrawerNav' || state.routes[0].name == 'UserLogin') {
    } else {
      navigate('PublicHome')
      return
    }
  }
  navigationRef.dispatch(CommonActions.goBack())
}

export const onLastScreenLeave = e => {
  const state = navigationRef?.getRootState()

  if (state.routes.length === 1) {
    if (
      state.routes[0].name == 'DrawerNav' ||
      state.routes[0].name == 'UserAuth'
    ) {
      if (e) {
        e.preventDefault()
      }
      Support.showConfirm({
        title: __('Hold on!'),
        message: __('Are you sure you want to exit?'),
        onYes: () => {
          if (Platform.OS == 'ios') {
            // NativeModules.RNExitApp.exitApp()
          } else {
            BackHandler.exitApp()
          }
        }
      })
      /* Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            if (Platform.OS == 'ios') {
              NativeModules.RNExitApp.exitApp()
            } else {
              BackHandler.exitApp()
            }
          }
        }
      ]) */
      return false
    } else {
      navigate('PublicHome')
      return false
    }
  }
  return true
}

export const onReady = () => {
  routeNameRef.current = navigationRef.getCurrentRoute().name
  setIsAppReady(true)
  SplashScreen.hide()
  const landingScreen = getLandingScreen()
  navigateReset(landingScreen.routeName, landingScreen.params)
}

export const onStateChange = async () => {}
