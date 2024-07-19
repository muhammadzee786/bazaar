import 'react-native-gesture-handler'

import { AppRegistry, LogBox } from 'react-native'
import Base from '@base'
import { name as appName } from './app.json'

if (__DEV__) {
  const errors = [
    'Warning: ...',
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
  ]
  LogBox.ignoreLogs(errors)

  LogBox.ignoreAllLogs(true)

  const originalWarn = console.error
  console.error = (message, ...optionalParams) => {
    if (errors.findIndex(m => m.indexOf(m) > -1) > -1) {
      return
    }
    if (message) { originalWarn(message, ...optionalParams) }
  }

  console.reportErrorsAsExceptions = false
}

AppRegistry.registerComponent(appName, () => Base)
