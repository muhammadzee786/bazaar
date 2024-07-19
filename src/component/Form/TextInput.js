import React from 'react'
import { TouchableOpacity, TextInput as NativeTextInput } from 'react-native'

const TextInput = (props) => {
  const { style, ...p } = props
  return (
    <NativeTextInput
      style={props.style ? [styles.container, props.style] : styles.container}
      {...p}
    />
  )
}

const styles = {
  container: {
  }
}

export default TextInput
