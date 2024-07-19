import React, { createRef } from 'react'
import { Image, ScrollView, View, TextInput } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import { LightStatusBar } from '@component/StatusBar'
import Header from '@component/Header'
import { Button, Picker } from '@component/Form'
import { __ } from '@utility/translation'

import theme from '@theme/styles'
import styles from './styles'
import Support from '@component/Support'
import http from '@utility/http'
import { URLS } from '@config/url'
import { Formik } from 'formik'
import { bind } from '@utility/component'

class Contact extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      countries: [],
      formInitialValues: {}
    }

    bind(this)

    if (props.session.isLoggedIn) {
      const names = props.session.user.name.split(' ').filter(r => (!!r))
      this.state.formInitialValues = {
        first_name: names.shift(),
        last_name: names.join(' '),
        email: props.session.user.email
      }
    }

    this.fetchCountries = this.fetchCountries.bind(this)
    this.validate = this.validate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderFormContainer = this.renderFormContainer.bind(this)

    this.refForm = createRef()
  }

  async componentDidMount () {
    await Support.showLoading()
    await this.fetchCountries()
    if (this.props.session.isLoggedIn) {
      try {
        await this.refForm.current.setFieldValue('country_code', this.props.session.user.country_code)
      } catch (e) {}
    }
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

  validate () {
    const isEmpty = (key) => {
      return !(typeof this.state.values[key] !== 'undefined' && this.state.values[key] !== '')
    }
    const errors = []
    if (isEmpty('first_name')) {
      errors.push('Please enter your first name')
    }
    if (isEmpty('last_name')) {
      errors.push('Please enter your last name')
    }
    if (isEmpty('email')) {
      errors.push('Please enter your email')
    }
    if (isEmpty('message')) {
      errors.push('Please enter your message')
    }
    if (isEmpty('country_code')) {
      errors.push('Please enter select country_code')
    }

    if (errors.length) {
      throw new Error(errors.join('\n'))
    }
  }

  async onSubmit (values) {
    await Support.showLoading()
    try {
      const country = this.state.countries.find(c => (c.value == values.country_code))
      if (country) {
        values.country_name = country.label
      }
      const r = (await http.post(URLS.CONTACT, values)).data
      await Support.showSuccess({
        message: 'Successfully sent',
        onHide: () => {},
        hideDelay: 2500
      })
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  renderForm ({ handleChange, handleBlur, handleSubmit, values }) {
    return (
      <ScrollView>
        <View style={styles.contactGroup}>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>{__('First Name')} *</Text>
          </View>
          <View style={styles.contactInputGroup}>
            <TextInput
              style={styles.contactInput}
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              onBlur={handleBlur('first_name')}
            />
          </View>
        </View>
        <View style={styles.contactGroup}>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>{__('Last Name')} *</Text>
          </View>
          <View style={styles.contactInputGroup}>
            <TextInput
              style={styles.contactInput}
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              onBlur={handleBlur('last_name')}
            />
          </View>
        </View>
        <View style={styles.contactGroup}>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>{__('Email Address')} *</Text>
          </View>
          <View style={styles.contactInputGroup}>
            <TextInput
              style={styles.contactInput}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
          </View>
        </View>
        <View style={styles.contactGroup}>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>{__('Message')} *</Text>
          </View>
          <View style={styles.contactInputGroup}>
            <TextInput
              style={[styles.contactInput, styles.contactInputMulti]}
              multiline
              numberOfLines={8}
              value={values.message}
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
            />
          </View>
        </View>
        <View style={styles.contactGroup}>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>{__('Country')} *</Text>
          </View>
          <View style={styles.contactSelectGroup}>
            <Picker
              items={this.state.countries}
              value={values.country_code}
              onChange={handleChange('country_code')}
              onBlur={handleBlur('country_code')}
            />
          </View>
        </View>
        <Button style={styles.contactBtn} onPress={handleSubmit}>
          <Text style={styles.contactBtnText}>{__('Submit')}</Text>
        </Button>
      </ScrollView>
    )
  }

  renderFormContainer () {
    return (
      <Formik
        innerRef={this.refForm}
        initialValues={this.state.formInitialValues}
        onSubmit={this.onSubmit}
      >
        {this.renderForm}
      </Formik>
    )
  }

  render () {
    return (
      <Container>
        <LightStatusBar />
        <Header
          variant='secondary'
          leftType='backarrow'
        />
        <Content style={theme.layout}>
          <View style={styles.contact}>
            <View style={styles.contactHeader}>
              <View style={styles.contactRow}>
                <Text style={styles.contactHeaderTitle}>{__('Contact')}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactHeaderDesc}>{__('We love questions & feedback')}</Text>
              </View>
            </View>
            <View style={styles.contactForm}>
              {this.renderFormContainer()}
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Contact)
