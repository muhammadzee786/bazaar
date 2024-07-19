import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import DatePickerNative from 'react-native-date-picker';

import Button from './Button';

const DEFAULT_DISPLAY_FORMAT = 'DD/MM/YYYY';

const DatePicker = props => {
  const [displayFormat, setDisplayFormat] = useState(
    props.displayFormat ?? DEFAULT_DISPLAY_FORMAT,
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.displayFormat != displayFormat) {
      setDisplayFormat(props.displayFormat);
    }
  }, [props.displayFormat]);

  return (
    <>
      <Button
        style={props.buttonStyle ?? styles.button}
        onPress={() => setOpen(true)}>
        <Text style={props.textStyle ?? styles.text}>
          {props.date ? props.date.format(displayFormat) : props.placeholder}
        </Text>
      </Button>
      <DatePickerNative
        modal
        mode="date"
        androidVariant="iosClone"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const styles = {
  button: {
    flex: 1,
    paddingVertical: 5,
  },
  text: {
    flex: 1,
    paddingVertical: 5,
  },
};

export default DatePicker;
