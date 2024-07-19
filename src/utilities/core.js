import { BackHandler, NativeModules, Platform } from 'react-native'

export const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export const wait = ms => (new Promise(res => setTimeout(res, ms), () => {}))

export const exitApp = () => {
  /* if (Platform.OS == 'ios') {
    NativeModules.RNExitApp.exitApp()
  } else {
    BackHandler.exitApp()
  } */
}
