import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18nHttpLoader from 'i18next-http-backend'
import { BASE_URL } from '@config/env'

import http from '@utility/http'
import { store } from '@store'
import { updateTranslation } from '@store/reducers/setting'
import { I18nManager } from 'react-native'

i18n
  .use(initReactI18next)
  .use(i18nHttpLoader)
  .init({
    lng: '',
    fallbackLng: '',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: BASE_URL + '/translations/{{lng}}/mobile.json',
      /* parse: (data) => {
        console.log('parse', data)
        return data
      }, */
      request: async (options, url, payload, callback) => {
        loadFromCache(callback)
        http.get(url).then((r) => {
          try {
            if (typeof r?.data === 'object') {
              callback(null, {
                status: 200,
                data: r.data
              })
              store.dispatch(updateTranslation({
                code: i18n.language,
                translation: r.data
              }))
            }
          } catch (e) {}
        }).catch(e => {
          callback(new Error('Failed'), null)
        })
      }
    }
  })

const loadFromCache = (callback) => {
  const setting = store.getState().setting
  if (i18n.language && setting.translations[i18n.language]) {
    const r = {
      status: 200,
      data: setting.translations[i18n.language]
    }
    return callback(null, r)
  }
}

export const changeLanguage = async (locale) => {
  i18n.changeLanguage(locale)
  const rtl = i18n.dir(locale).toUpperCase()
  if (rtl !== (I18nManager.isRTL ? 'RTL' : 'LTR')) {
    I18nManager.forceRTL(rtl === 'RTL')
  }
}

export const __ = (name, params = {}) => i18n.t(name)

export default i18n
