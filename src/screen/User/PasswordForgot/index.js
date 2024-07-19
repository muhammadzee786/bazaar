import React from 'react'
import { ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'
import { Formik } from 'formik'

import { navigate, navigateReset } from '@navigation'
import Header from '@component/Header'
import { __ } from '@utility/translation'

import { Button, TextInput } from '@component/Form'
import styles from './styles'
import { DarkStatusBar } from '@component/StatusBar'

import { URLS } from '@config/url'
import http from '@utility/http'
import Support from '@component/Support'
import { login } from '@store/reducers/session'

class PasswordForgot extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      auth_field: 'email'
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderFormContainer = this.renderFormContainer.bind(this)
  }

  async onSubmit (values) {
    const cb = () => {}
    await Support.showLoading()
    try {
      const data = {
        auth_field: this.state.auth_field,
        ...values
      }

      const r = (await http.post(URLS.AUTH_PASSWORD_EMAIL, data)).data

      await Support.showSuccess({
        message: r?.message || __('Successfully send'),
        onHide: () => {
          navigateReset('UserLogin')
        },
        hideDelay: 2500
      })
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
    cb()
  }

  renderForm ({ handleChange, handleBlur, handleSubmit, values }) {
    return (
      <View style={styles.content}>
        <View style={styles.formContent}>
          {
            this.state.auth_field === 'email' &&
              <View style={styles.formGroup}>
                <TextInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='email-address'
                  placeholder={__('Email')}
                  placeholderTextColor='rgba(0,0,0,0.5)'
                  style={[styles.formInput, { textTransform: 'lowercase' }]}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <Icon name='user' type='AntDesign' style={styles.formInputIcon} />
              </View>
          }
          <Button style={styles.btnSave} onPress={handleSubmit}>
            <Text style={styles.btnSaveText}>{__('Send')}</Text>
            <Icon
              name='arrow-right'
              type='Feather'
              style={styles.btnSaveIcon}
            />
          </Button>
        </View>
        <View style={styles.formFooter}>
          {/* <Button
            style={styles.forgotBtn}
            onPress={() => navigate('UserForgotPassword')}
          >
            <Text style={styles.forgotBtnText}>
              {__('Lost your password?')}
            </Text>
          </Button> */}
          <View style={styles.formRow}>
            <Text style={styles.formFooterText}>
              {__('Already have an account?')}
            </Text>
          </View>
          <Button
            style={styles.loginBtn}
            onPress={() => navigate('UserLogin')}
          >
            <Text style={styles.loginBtnText}>{__('Login')}</Text>
          </Button>
        </View>
      </View>
    )
  }

  renderFormContainer () {
    return (
      <Formik initialValues={{}} onSubmit={this.onSubmit}>
        {this.renderForm}
      </Formik>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' />
        <Content style={styles.signUp}>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.row}>
                <Text style={styles.headerTitle}>{__('Forgot Password')}</Text>
              </View>
            </View>

            {this.renderFormContainer()}
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { login })(PasswordForgot)
