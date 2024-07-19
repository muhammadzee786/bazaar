import React from 'react'
import { Platform, RefreshControl as RefreshControlNative } from 'react-native'

import { COLOR } from '@theme/typography'

const RefreshControl = (props) => {
  return (
    <RefreshControlNative
      tintColor='white'
      style={Platform.select({
        ios: {
          backgroundColor: COLOR.PRIMARY
        },
        android: {}
      })}
      {...props}
    />
  )
}

export default RefreshControl
