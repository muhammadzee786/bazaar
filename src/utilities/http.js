import axios from 'axios'
// import urlParse from 'url-parse';

import { store } from '@store'
import { API_TOKEN, API_URL } from '@config/env'
import { notifySessionExpired } from '@helper/user'

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  xsrfCookieName: 'XSRF-TOKEN-API',
  xsrfHeaderName: 'X-XSRF-TOKEN-API'
})

instance.defaults.headers.common.Accept = 'application/json'
instance.defaults.headers.common['Content-Language'] = 'en'

instance.interceptors.request.use(async config => {
  const state = store.getState()

  config.headers['X-AppApiToken'] = API_TOKEN
  if (state.session.isLoggedIn) {
    config.headers.Authorization = 'Bearer ' + state.session.token
  }

  /* if (state.setting.countryCode) {
    const parsed = urlParse(config.url, true);
    const query = {...parsed.query, country_code: state.setting.countryCode};
    parsed.set('query', query);
    config.url = parsed.href;
  } */
  if (state.setting.languageCode) {
    config.headers['Accept-Language'] = state.setting.languageCode
    config.headers['Content-Language'] = state.setting.languageCode
  }

  // config.timeout = 3500
  if (config.method == 'post' || config.method == 'put') {
    // config.timeout = 8000
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
      config.data.append('an-empty-var', '')
    }
  }

  return config
})

instance.interceptors.response.use(
  async function (response) {
    return response
  },
  async function (error) {
    if (error.response.status == '401') {
      notifySessionExpired()
    }
    return Promise.reject(error)
  }
)

export default instance
