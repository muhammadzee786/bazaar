import React from 'react'
import { ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'
import { Formik } from 'formik'

import { navigate, navigateReset } from '@navigation'
import Header from '@component/Header'
import { __ } from '@utility/translation'

import { Button, TextInput } from '@component/Form'
import theme from '@theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@component/StatusBar'

import { URLS } from '@config/url'
import http from '@utility/http'
import Support from '@component/Support'
import { login } from '@store/reducers/session'
import { initiateUserSession } from '@helper/user'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      auth_field: 'email'
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderFormContainer = this.renderFormContainer.bind(this)
  }

  async onSubmit(values) {
    let cb = () => { }
    await Support.showLoading()
    try {
      const data = {
        auth_field: this.state.auth_field,
        ...values
      }

      const r = (await http.post(URLS.AUTH_LOGIN, data)).data

      const isLoggedIn = await initiateUserSession({
        userId: r.result.id,
        token: r.extra.authToken,
        tokenType: r.extra.tokenType,
        isAdmin: r.extra.isAdmin
      })

      if (isLoggedIn) {
        cb = async () => {
          await Support.showSuccess({
            message: __('Successfully loggedin'),
            onHide: () => {
              navigateReset('PublicHome')
            },
            hideDelay: 2500
          })
        }
      } else {
        throw new Error('Login Failed')
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
    cb()
  }

  renderForm({ handleChange, handleBlur, handleSubmit, values }) {
    return (
      <View style={styles.content}>
        <View style={styles.formContent}>
          {/*}
          <Button 
            style={[styles.btnTab, this.state.auth_field==='email' ? styles.btnTabActive : null]}
            onPress={() => this.setState({auth_field: 'email'})}
          >
            <Text>Email</Text>
          </Button>
          <Button 
            style={[styles.btnTab, this.state.auth_field==='phone' ? styles.btnTabActive : null]}
            onPress={() => this.setState({auth_field: 'phone'})}
          >
            <Text>Mobile</Text>
          </Button>
          {*/}
          {
            this.state.auth_field === 'email'
            &&
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
          {
            this.state.auth_field === 'phone'
            &&
            <View style={styles.formGroup}>
              <TextInput
                placeholder={__('Mobile')}
                placeholderTextColor='rgba(0,0,0,0.5)'
                style={[styles.formInput, { textTransform: 'lowercase' }]}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
              <Icon name='user' type='AntDesign' style={styles.formInputIcon} />
            </View>
          }
          <View style={[styles.formGroup, styles.formLast]}>
            <TextInput
              secureTextEntry
              placeholder={__('Password')}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <Icon name='lock' type='Octicons' style={styles.formInputIcon} />
          </View>
          <Button style={styles.btnSave} onPress={handleSubmit}>
            <Text style={styles.btnSaveText}>{__('Log In')}</Text>
            <Icon
              name='arrow-right'
              type='Feather'
              style={styles.btnSaveIcon}
            />
          </Button>
        </View>
        <View style={styles.formForgot}>
          <Button
            style={styles.forgotBtn}
            onPress={() => navigate('UserPasswordForgot')}
          >
            <Text style={styles.forgotBtnText}>
              {__('Lost your password?')}
            </Text>
          </Button>
          <View style={styles.formRow}>
            <Text style={styles.formFooterText}>
              {__("Don't have an account yet?")}
            </Text>
          </View>
          <Button
            style={styles.loginBtn}
            onPress={() => navigate('UserRegister')}
          >
            <Text style={styles.loginBtnText}>{__('Register')}</Text>
          </Button>
        </View>
      </View>
    )
  }

  renderFormContainer() {
    return (
      <Formik initialValues={{}} onSubmit={this.onSubmit}>
        {this.renderForm}
      </Formik>
    )
  }

  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' />
        <Content style={styles.signUp}>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.row}>
                <Text style={styles.headerTitle}>{__('Log In')}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.headerDesc}>
                  {__('Login & post your ads free & premium')}
                </Text>
              </View>
            </View>

            {this.renderFormContainer()}
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { login })(Login)
