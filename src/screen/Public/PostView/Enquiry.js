import React, { useState } from 'react'
import {
  TextInput,
  View
} from 'react-native'
import { Text, Icon } from '@component/Basic'
import { Formik } from 'formik'

import styles from './styles'
import { __ } from '@utility/translation'
import Support from '@component/Support'
import http from '@utility/http'
import { URLS } from '@config/url'
import { Button } from '@component/Form'
import { navigate } from '@navigation/'

const Enquiry = ({ post, session }) => {
  if (!session.isLoggedIn) {
    return (
      <View style={styles.form}>
        <Button onPress={() => navigate('UserLogin')}>
          <Text style={styles.formText}>{__('Please click here login to send message')}</Text>
        </Button>
      </View>
    )
  }

  const onSubmit = async (values) => {
    await Support.showLoading()
    try {
      const sdata = session.isLoggedIn
        ? {
            name: session.user.name,
            email: session.user.email,
            phone: session.user.phone,
            phone_country: session.user.country_code,
          }
        : {}
        values.auth_field = 'email'
      values.post_id = post.id

      const r = (await http.post(URLS.THREADS, { ...sdata, ...values })).data
      if (r.success) {
        await Support.showSuccess({
          message: r.message || 'Successfully sent',
          onHide: () => {},
          hideDelay: 2500
        })
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  const renderForm = ({ handleChange, handleBlur, handleSubmit, values }) => {
    return (
      <View style={styles.formContent}>
        <View style={styles.formRow}>
          <TextInput
            multiline
            numberOfLines={8}
            placeholder={__('Your Message')}
            placeholderTextColor='rgba(0,0,0,0.5)'
            value={values.body}
            onChangeText={handleChange('body')}
            onBlur={handleBlur('body')}
            style={styles.formInput}
          />
        </View>
        <View style={styles.formRow}>
          <Button style={styles.formBtn} onPress={handleSubmit}>
            <Text style={styles.formBtnText}>{__('Send')}</Text>
            <Icon name='envelope-o' type='FontAwesome' style={styles.formBtnIcon} />
          </Button>
        </View>
      </View>
    )
  }
  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmit}
    >
      {renderForm}
    </Formik>
  )
}

export default Enquiry
