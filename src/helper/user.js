import RNRestart from 'react-native-restart'

import { URLS } from '@config/url'
import { store } from '@store'
import { updateUser, logout, login } from '@store/reducers/session'
import http from '@utility/http'
// import SectionProvider from '@component/Section/Provider'
import Support from '@component/Support'
import { wait } from '@utility/core'

export const initiateUserSession = async ({
  userId,
  token,
  tokenType,
  isAdmin
}) => {
  try {
    const params = {
      embed: 'country,userType,gender'
    }

    const headers = {
      Authorization: 'Bearer ' + token
    }

    const r = (await http.get(URLS.USERS + '/' + userId, { params, headers })).data
    if (r.result.id) {
      await store.dispatch(login({
        user: refineSessionUser(r.result),
        token,
        tokenType,
        isAdmin
      }))

      return true
    }
  } catch (e) {
    throw e
  }
  return false
}

export const checkUserSession = async () => {
  try {
    const state = store.getState()

    const params = {
      embed: 'country,userType,gender'
    }

    const r = (await http.get(URLS.USERS + '/' + state.session.user.id, { params })).data

    if (r.result.id && (r.result.email || r.result.phone)) {
      await store.dispatch(updateUser({
        user: refineSessionUser(r.result)
      }))
    } else {
      throw new Error({
        response: { status: '401', data: { message: 'Session timeout' } }
      })
    }
  } catch (e) {
    if (typeof e === 'object' && e.response) {
      if (e.response.status == '401') {
        await clearCurrentUserSession()
        wait(500)
        RNRestart.Restart()
      }
    }
  }
}

export const notifyLogout = async () => {
  let b = false
  try {
    const state = store.getState()
    if (state.session.isLoggedIn) {
      await http.get(URLS.AUTH_LOGOUT + '/' + state.session.user.id)
    }
    b = true
  } catch (e) {
  }
  return b
}

export const showNoAuthenticated = (message) => {

}

let isSessionExpiredNotified = false

export const notifySessionExpired = async () => {
  if (isSessionExpiredNotified) {
    return
  }
  isSessionExpiredNotified = true

  await Support.showError({
    title: 'Session Expired',
    message: 'You will be redirected into Login',
    hideDelay: 1500,
    onHide: async () => {
      await clearCurrentUserSession()
      wait(2500)
      RNRestart.Restart()
    }
  })
}

export const clearCurrentUserSession = async () => {
  await store.dispatch(logout())
}

export const refineSessionUser = (_user) => {
  const { country, gender, ...user } = _user
  if (country) {
    user.country = {
      code: country.code,
      currency_code: country.currency_code,
      name: country.name,
      phone: country.phone
    }
    if (user.phone.indexOf('+') === 0) {
      user.phone = user.phone.replace('+' + country.phone, '')
    }
  }
  return user
}
