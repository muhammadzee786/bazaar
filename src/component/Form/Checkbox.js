import React from 'react';

import {Icon} from '@component/Basic';
import {Button} from '@component/Form';

const Checkbox = props => {
  const {style, checked, onChange, prefix, suffix, color, ...p} = props;

  p.onPress = () => {
    onChange && onChange(!checked);
  };

  const iconStyle = {color: color || 'black'};
  if (prefix || suffix) {
    iconStyle.paddingHorizontal = 0;
  }

  return (
    <Button
      style={props.style ? [styles.container, props.style] : styles.container}
      {...p}>
      {prefix}
      <Icon
        name={checked ? 'check-square' : 'square'}
        type="Feather"
        style={iconStyle}
      />
      {suffix}
    </Button>
  );
};

const styles = {
  container: {
    
  },
};

export default Checkbox;
