import { createSlice } from '@reduxjs/toolkit'
import cloneDeep from 'lodash/cloneDeep'

const initialState = {
  countries: [],
  countryIndex: -1,
  countryCode: '',

  languages: [],
  languageIndex: -1,
  languageCode: '',
  languageCodeDefault: '',

  translations: {},

  server: {}
}

// server - form - publication_form_type - 1 Single / 2 Multiple

const callbacks = {}

callbacks.updateCountries = (state, action) => {
  state.countries = action.payload.countries.map(r => ({
    code: r.code,
    name: r.name,
    direction: r.direction,
    default: false
  }))
}

callbacks.changeCountry = (state, action) => {
  const countryIndex = state.countries.findIndex(
    r => r.code === action.payload
  )

  if (state.countries[countryIndex]) {
    const country = state.countries[countryIndex]
    state.countryIndex = countryIndex
    state.countryCode = country.code
  }
}

callbacks.updateLanguages = (state, action) => {
  state.languages = action.payload.languages.map(r => {
    const isDefault = r?.default?.toString() === '1'
    if (isDefault) {
      state.languageCodeDefault = r.abbr
    }
    return {
      code: r.abbr,
      name: r.name,
      direction: r.direction,
      default: isDefault
    }
  })
}

callbacks.changeLanguage = (state, action) => {
  const languageIndex = state.languages.findIndex(
    r => r.code === action.payload
  )

  if (state.languages[languageIndex]) {
    const language = state.languages[languageIndex]
    state.languageIndex = languageIndex
    state.languageCode = language.code
  }
}

callbacks.updateTranslation = (state, action) => {
  state.translations = {}
  state.translations[action.payload.code] = action.payload.translation
}

callbacks.updateServer = (state, action) => {
  state.server[action.payload.name] = action.payload.config
}

const slice = createSlice({
  name: 'setting',
  initialState: cloneDeep(initialState),
  reducers: callbacks
})

const { actions, reducer } = slice

export const {
  updateCountries,
  changeCountry,
  updateLanguages,
  changeLanguage,
  updateTranslation,
  updateServer
} = actions

export default reducer
