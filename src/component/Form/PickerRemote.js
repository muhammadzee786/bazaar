import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, View, Text} from 'react-native';

import {pickerSelectStyles} from '@theme/styles';
import {Icon} from '@component/Basic';
import {Button} from '@component/Form';
import {COLOR, SIZE, FAMILY} from '@theme/typography';

const PickerRemote = ({variant = 'default', ...props}) => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [selected, setSelected] = useState(null);

  const {
    onChange,
    placeholder,
    placeholderTextColor,
    style: _style,
    ...p
  } = props;

  useEffect(() => {
    const s = items.find(r => r.value == props.value);
    setSelected(s || null);
  }, [items]);
  useEffect(() => {
    if ((selected && selected.value != props.value) || props.value) {
      const s = items.find(r => r.value == props.value);
      setSelected(s || null);
    }
  }, [props.value]);

  const style = [pickerSelectStyles];
  if (_style) {
    style.push(_style);
  }

  const openPicker = () => {
    setFetching(true)
    setItems([])
    fetchList()
    setShow(true);
  };

  const onRequestClose = () => {
    setShow(false);
  };

  const fetchList = async () => {

  }

  const renderLabel = () => {
    return props.renderLabel ? (
      props.renderLabel(selected)
    ) : (
      <View style={props.labelContainerStyle}>
        <Text style={props.labelStyle || styles.labelStyle}>
          {selected.label}
        </Text>
      </View>
    );
  };

  const renderPlaceholder = () => {
    return props.renderPlaceholder ? (
      props.renderPlaceholder()
    ) : (
      <Text>{placeholder || 'Select'}</Text>
    );
  };

  const renderEmptyList = () => {
    return <Text>No items found...</Text>;
  };

  const renderArrow = () => {
    if (!props.showArrow) {
      return null;
    }
    return (
      <View style={props.iconContainerStyle}>
        <Icon
          name={props.iconName || 'chevron-small-down'}
          type={props.iconType || 'Entypo'}
          style={props.iconStyle || styles.iconStyle}
        />
      </View>
    );
  };

  const renderView = () => {
    return (
      <Button
        style={props.buttonStyle || styles.buttonStyle}
        onPress={openPicker}>
        {selected ? renderLabel() : renderPlaceholder()}
        {renderArrow()}
      </Button>
    );
  };

  const renderItem = (item, isFirst, isLast) => {
    const isSelected = selected && item.value === selected.value;
    let content;
    if (props.renderItem) {
      content = props.renderItem(item, isSelected, isFirst, isLast);
    } else {
      const textStyle = [styles.optionTextStyle];
      textStyle.push(props.optionTextStyle);
      if (isSelected) {
        textStyle.push(styles.optionTextStyleSelected);
      }
      content = <Text style={textStyle}>{item.label}</Text>;
    }

    const outerStyle = [styles.optionOuterStyle];
    if (props.optionOuterStyle) {
      outerStyle.push(props.optionOuterStyle);
    }
    if (isLast) {
      outerStyle.push({borderBottomWidth: 0});
    }

    const selectItem = () => {
      setSelected(item);
      onChange && onChange(item.value);
      setShow(false);
    };

    return (
      <Button
        key={item.value}
        activeOpacity={0.2}
        accessible={false}
        importantForAccessibility={isFirst ? 'yes' : 'no'}
        style={outerStyle}
        onPress={selectItem}>
        <View style={props.optionInnerStyle}>{content}</View>
      </Button>
    );
  };

  const renderItems = () => {
    if (items && items.length) {
      const length = items.length;
      return items.map((item, index) =>
        renderItem(item, index === 0, index === length - 1),
      );
    }
    return renderEmptyList();
  };

  const renderHeader = () => {
    if (!props.showHeader) {
      return null;
    }

    return (
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Button style={styles.headerBtn} onPress={onRequestClose}>
            <Icon name="close" type="AntDesign" style={styles.headerBtnIcon} />
          </Button>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>
            {props.optionListTitle || placeholder || 'Select'}
          </Text>
        </View>
      </View>
    );
  };

  const renderModal = () => {
    if (!show) {
      return null;
    }

    // const height = windowHeight - 10

    const Overlay = Button;
    const overlayProps = {};
    overlayProps.style = styles.overlay;
    overlayProps.onPress = onRequestClose;

    const optionContainerStyle = [styles.optionContainer];
    if (props.optionContainerStyle) {
      optionContainerStyle.push(props.optionContainerStyle);
    }

    return (
      <Modal
        animationType="fade"
        transparent
        visible={show}
        onRequestClose={onRequestClose}>
        <Overlay {...overlayProps}>
          <View style={styles.modalView}>
            {renderHeader()}
            <ScrollView
              overScrollMode="never"
              bounces={false}
              keyboardShouldPersistTaps="always"
              accessible={false}
              style={styles.modalScroll}>
              <View style={optionContainerStyle}>{renderItems()}</View>
            </ScrollView>
          </View>
        </Overlay>
      </Modal>
    );
  };

  return (
    <View style={styles.viewContainer}>
      {renderView()}
      {renderModal()}
    </View>
  );
};

const styles = {
  viewContainer: {
    flexDirection: 'row',
  },

  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  labelStyle: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },
  iconStyle: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY,
  },

  /* Header */
  header: {},
  headerRow: {},
  headerBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 15,
    zIndex: 10,
  },
  headerBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
  },
  headerContent: {
    borderLeftWidth: 1,
    borderColor: COLOR.DARK,
    paddingVertical: 0,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  headerText: {
    fontFamily: FAMILY.GEO_SEMIBOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    marginLeft: 15,
  },

  overlay: {
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  modalView: {
    maxHeight: 300,
    minHeight: 300,
    borderRadius: 10,
    flexShrink: 1,
    marginBottom: 8,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  optionOuterStyle: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.SMOKE_DARK,
  },
  optionTextStyle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    textAlign: 'center',
    paddingVertical: 12,
  },
  optionTextStyleSelected: {
    fontFamily: FAMILY.BOLD,
    color: COLOR.BLACK,
  },
};

export default React.memo(PickerRemote);
