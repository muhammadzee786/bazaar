import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Formik } from 'formik'

import { Icon, Text } from '@component/Basic'
import { Button, TextInput } from '@component/Form'
import Support from '@component/Support'
import { URLS } from '@config/url'
import http from '@utility/http'
import { __ } from '@utility/translation'
import styles from './../styles'
import Gender from './Gender'
import { checkUserSession } from '@helper/user'
import { compile } from 'path-to-regexp'

const fetchGenders = async () => {
  try {
    const r = (await http.get(URLS.GENDERS)).data
    if (r?.result?.data?.length) {
      return r.result.data.map(l => ({
        label: l.name,
        value: l.id.toString()
      }))
    }
  } catch (e) {}
  return []
}

const Profile = ({ session }) => {
  const [loading, setLoading] = useState(true)
  const [formInitialValues, setFormInitialValues] = useState({})
  const [genders, setGenders] = useState([])

  useEffect(() => {

  }, [])

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    await checkUserSession()
    setFormInitialValues({ ...session.user })
    const _genders = await fetchGenders()
    setGenders(_genders)
    setLoading(false)
  }

  const onSubmit = async (values) => {
    await Support.showLoading()
    try {
      /* const values = { ..._values }
      if (typeof values.password !== 'undefined' || typeof values.password !== 'undefined') {
        if (!values.password && !values.password_confirmation) {
          delete values.password
          delete values.password_confirmation
        }
      } */
      const url = compile(URLS.USERS_ID)({ id: session.user.id })
      const r = (await http.put(url, values)).data
      if (r.success) {
        await Support.showSuccess({
          message: r.message || 'Successfully updated',
          onHide: () => {},
          hideDelay: 2500
        })
        await checkUserSession()
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  const renderForm = ({ handleChange, handleBlur, handleSubmit, values }) => {
    return (
      <>
        <View style={styles.formRow}>
          <View style={styles.row}>
            <Text style={styles.formLabel}>{__('Gender')}</Text>
          </View>
          <View style={styles.formCol}>
            <Gender
              list={genders}
              gender_id={values.gender_id}
              handleChange={handleChange}
            />
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.row}>
            <Text style={styles.formLabel}>{__('Name')}</Text>
          </View>
          <View style={styles.formGroup}>
            <TextInput
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.row}>
            <Text style={styles.formLabel}>{__('Email')}</Text>
          </View>
          <View style={styles.formGroup}>
            <TextInput
              editable={false}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.row}>
            <Text style={styles.formLabel}>{__('Phone')}</Text>
          </View>
          <View style={styles.formGroup}>
            <TextInput
              editable={false}
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
            />
          </View>
        </View>
        {/* }
        <View style={styles.formRow}>
          <View style={styles.row}>
            <Text style={styles.formLabel}>{__('Password')}</Text>
          </View>
          <View style={styles.formGroup}>
            <TextInput
              secureTextEntry
              // placeholder='Password'
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.row}>
            <Text style={styles.formLabel}>{__('Confirm Password')}</Text>
          </View>
          <View style={styles.formGroup}>
            <TextInput
              secureTextEntry
              // placeholder='Password'
              placeholderTextColor='rgba(0,0,0,0.5)'
              style={styles.formInput}
              value={values.password_confirmation}
              onChangeText={handleChange('password_confirmation')}
              onBlur={handleBlur('password_confirmation')}
            />
          </View>
        </View>
        { */}
        <Button style={styles.formBtn} onPress={handleSubmit}>
          <Text style={styles.formBtnText}>{__('Update')}</Text>
          <Icon name='arrow-right' type='Feather' style={styles.formBtnIcon} />
        </Button>
      </>
    )
  }
  if (loading) {
    return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size='small' animating /></View>
  }
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={onSubmit}
    >
      {renderForm}
    </Formik>
  )
}

export default Profile
