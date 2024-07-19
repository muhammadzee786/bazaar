import React from 'react'
import { TouchableOpacity } from 'react-native'

const Content = (props) => {
  const { style, onPress, ...p } = props
  if (onPress) {
    p.onPress = onPress
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={props.style ? [styles.container, props.style] : styles.container}
      {...p}
    >{props.children}
    </TouchableOpacity>
  )
}

const styles = {
  container: {
  }
}

export default Content
