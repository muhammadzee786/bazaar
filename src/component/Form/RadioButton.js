import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '@component/Basic'
import { Button } from '@component/Form'
import { COLOR, SIZE } from '@theme/typography'

const RadioButton = props => {
  const { style, checked, onChange, prefix, suffix, color, type, ...p } = props

  p.onPress = () => {
    onChange && onChange(!checked)
  }

  const iconStyle = [styles.icon]
  if (checked) {
    iconStyle.push({ color: color || COLOR.DARK })
  } else {
    iconStyle.push({ color: color || COLOR.GREY })
  }
  if (prefix || suffix) {
    iconStyle.push({ paddingHorizontal: 0 })
  }

  return (
    <Button
      style={props.style ? [styles.container, props.style] : styles.container}
      {...p}
    >
      {prefix}
      <Icon
        name={checked ? icons[type].checked[0] : icons[type].unchecked[0]}
        type={checked ? icons[type].checked[1] : icons[type].unchecked[1]}
        style={iconStyle}
      />
      {suffix}
    </Button>
  )
}

const styles = {
  container: {
  },
  icon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  }
}

const icons = {
  default: {
    checked: ['radio-button-checked', 'MaterialIcons'],
    unchecked: ['radio-button-unchecked', 'MaterialIcons']
  },
  primary: {
    checked: ['radio-button-checked', 'MaterialIcons'],
    unchecked: ['radio-button-unchecked', 'MaterialIcons']
  }
}

RadioButton.propTypes = {
  type: PropTypes.oneOf(['default', 'primary'])
}

RadioButton.defaultProps = {
  type: 'default'
}

export default RadioButton
