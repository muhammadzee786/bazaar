import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import Modal from 'react-native-modalbox'
import { connect } from 'react-redux'
import { Formik } from 'formik'

import { navigate, navigateCurrent } from '@navigation'
import Header from '@component/Header'
import { __ } from '@utility/translation'

import { Button, Picker, TextInput } from '@component/Form'
import theme from '@theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@component/StatusBar'

import { URLS } from '@config/url'
import http from '@utility/http'
import Support from '@component/Support'
import { bind } from '@utility/component'

class Register extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      countries: []
    }

    bind(this)

    this.fetchCountries = this.fetchCountries.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderFormContainer = this.renderFormContainer.bind(this)
  }

  async componentDidMount () {
    await Support.showLoading()
    await this.fetchCountries()
    await Support.hideLoading()
  }

  async fetchCountries () {
    try {
      const r = (await http.get(URLS.COUNTRIES)).data
      const countries = r.result.data.map(c => ({
        label: c.name,
        value: c.code
      }))
      await this.promisedSetState({
        countries
      })
    } catch (e) {}
  }

  validate (values) {
    const isEmpty = (key) => {
      return !(typeof values[key] !== 'undefined' && values[key] !== '')
    }
    const errors = []
    if (isEmpty('name')) {
      errors.push(__('Please enter your name'))
    }
    if (isEmpty('email')) {
      errors.push(__('Please enter your email'))
    }
    if (isEmpty('password')) {
      errors.push(__('Please enter password'))
    }
    if (isEmpty('password_confirmation')) {
      errors.push(__('Please enter confirm password'))
    }
    if (isEmpty('country_code')) {
      errors.push(__('Please enter select Country Code'))
    }

    if (errors.length) {
      throw new Error(errors.join('\n'))
    }
  }

  async onSubmit (values) {
    await Support.showLoading()
    try {
      this.validate(values)

      const r = (await http.post(URLS.USERS, values)).data

      if (r.success) {
        let message = __('Your account is created successfully')
        if (r?.extra?.sendEmailVerification?.success) {
          message = r.extra.sendEmailVerification.message
        } else if (r?.extra?.sendPhoneVerification?.success) {
          message = r.extra.sendPhoneVerification.message
        } else if (r?.message) {
          message = r.message
        }
        await Support.showSuccess({
          message,
          onHide: () => {
            navigateCurrent('UserLogin')
          },
          hideDelay: 2500
        })
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  renderForm ({ handleChange, handleBlur, handleSubmit, values }) {
    return (
      <View style={styles.content}>
        <View style={styles.formContent}>
          <View style={styles.formGroup}>
            <TextInput
              placeholder={__('Name')}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            <Icon name='user' type='AntDesign' style={styles.formInputIcon} />
          </View>
          {/* }
          <View style={styles.formGroup}>
            <TextInput
              placeholder='Mobile Number'
              placeholderTextColor='rgba(0,0,0,0.5)'
              keyboardType='numeric'
              style={styles.formInput}
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
            />
            <Icon name='mobile1' type='AntDesign' style={styles.formInputIcon} />
          </View>
          { */}
          <View style={styles.formGroup}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              placeholder={__('Email Address')}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <Icon name='envelope-o' type='FontAwesome' style={styles.formInputIcon} />
          </View>
          <View style={styles.formGroup}>
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
          <View style={styles.formGroup}>
            <TextInput
              secureTextEntry
              placeholder={__('Confirm Password')}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.password_confirmation}
              onChangeText={handleChange('password_confirmation')}
              onBlur={handleBlur('password_confirmation')}
            />
            <Icon name='lock' type='Octicons' style={styles.formInputIcon} />
          </View>
          <View style={[styles.formGroup, styles.formLast]}>
            <View style={styles.formSelect}>
              <Picker
                items={this.state.countries}
                value={values.country_code}
                placeholder={__('Country')}
                onChange={handleChange('country_code')}
                onBlur={handleBlur('country_code')}
              />
            </View>
            <Icon name='globe' type='SimpleLineIcons' style={styles.formInputIcon} />
          </View>
          <Button style={styles.btnSave} onPress={handleSubmit}>
            <Text style={styles.btnSaveText}>{__('Register')}</Text>
            <Icon name='arrow-right' type='Feather' style={styles.btnSaveIcon} />
          </Button>
        </View>
        <View style={styles.formFooter}>
          <Button style={styles.termBtn}>
            <Text style={styles.termBtnText}>{__('I have read and agree to the Terms & Conditions')}</Text>
          </Button>
          <View style={styles.formRow}>
            <Text style={styles.formFooterText}>{__('Already have an account?')}</Text>
          </View>
          <Button style={styles.loginBtn} onPress={() => navigate('UserLogin')}>
            <Text style={styles.loginBtnText}>{__('Login')}</Text>
          </Button>
        </View>
      </View>
    )
  }

  renderFormContainer () {
    return (
      <Formik
        initialValues={{ accept_terms: true }}
        onSubmit={this.onSubmit}
      >
        {this.renderForm}
      </Formik>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
        />
        <Content style={styles.signUp}>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.row}>
                <Text style={styles.headerTitle}>{__('Sign Up')}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.headerDesc}>{__('Create your account, It\'s 100% free')}</Text>
              </View>
            </View>

            {this.renderFormContainer()}
          </ScrollView>
        </Content>

        <Modal
          ref='modalSuccess'
          position='center'
          style={styles.modal}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>{__('')}</Text>
            <Button style={styles.modalCloseBtn} onPress={() => this.refs.modalSuccess.close()}>
              <Icon name='close-a' type='Fontisto' style={styles.modalCloseBtnIcon} />
            </Button>
          </View>
          <View style={styles.modalContent}>
            <Icon name='check-circle' type='Feather' style={styles.modalSuccessIcon} />
            <View style={styles.modalRow}>
              <Text style={styles.modalTitle}>{__('Congratulations')}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modalDesc}>{__('Your account has been created. We have sent the verification message to your email address')}</Text>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Register)
