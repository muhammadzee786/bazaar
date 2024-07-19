import React from 'react'
import { Text, View } from 'react-native'

import { Container, Content } from '@component/Basic'
import { Button } from '@component/Form'
import Header from '@component/Header'
import { DarkStatusBar } from '@component/StatusBar'
import { goBack, navigateCurrent } from '@navigation'
import { FAMILY, SIZE, COLOR } from '@theme/typography'
import { __ } from '@utility/translation'

const NoAuth = () => {
  const login = () => navigateCurrent('UserLogin')
  return (
    <Container>
      <DarkStatusBar />
      <Header
        primary
        leftType='back'
        title={__('Authentication required')}
        titleColor='light'
      />
      <Content style={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.header}>{__('Welcome to Bleje!')}</Text>
          <Text style={styles.text}>{__('You are viewing the app as a Guest, some features are not available to the guests. Register and enjoy the best features.')}</Text>
          <View style={styles.btn}>
            <Button style={styles.cancelBtn} onPress={goBack}>
              <Text style={styles.cancelBtnText}>{__('I\'ll do it Later')}</Text>
            </Button>
            <Button
              style={styles.byeBtn}
              onPress={login}
            >
              <Text style={styles.byeBtnText}>{__('Register Now')}</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  )
}

const styles = {
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  header: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    textAlign: 'center',
    marginBottom: 10
  },
  close: {
    justifyContent: 'space-between'
  },
  closeBtn: {
    alignSelf: 'flex-end'
  },
  closeBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY_DARK
  },

  text: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cancelBtn: {
    backgroundColor: COLOR.SMOKE_DARK,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginRight: 10,
    borderRadius: 5
  },
  cancelBtnText: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  byeBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5
  },
  byeBtnText: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  }
}

export default NoAuth
