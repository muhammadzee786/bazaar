import React from 'react'
import { BackHandler } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '@store'

import { changeLanguage } from '@utility/translation'

import { setLandingScreen, onLastScreenLeave } from '@navigation'
import Navigator from '@navigation/screen'
import Support from '@component/Support'
import { checkUserSession } from '@helper/user'
import { URLS } from '@config/url'
import http from '@utility/http'
import { updateServer } from '@store/reducers/setting'
import { exitApp } from '@utility/core'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      storeLoaded: false,
      loading: true
    }

    this.fetchServerConfig = this.fetchServerConfig.bind(this)
    this.initiate = this.initiate.bind(this)
    this.onBeforeLift = this.onBeforeLift.bind(this)
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', function () {
      onLastScreenLeave()
      return true
    })

    this.fetchServerConfig()
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', function () {})
  }

  async fetchServerConfig () {
    if (!this.state.storeLoaded) {
      setTimeout(this.fetchServerConfig, 1000)
      return
    }
    try {
      const r = (await http.get(URLS.SETTINGS)).data
      await store.dispatch(updateServer({ name: 'app', config: typeof r.result.app === 'object' ? r.result.app : '' }))
      await store.dispatch(updateServer({ name: 'list', config: typeof r.result.list === 'object' ? r.result.list : '' }))
      await store.dispatch(updateServer({ name: 'form', config: typeof r.result.single === 'object' ? r.result.single : '' }))
    } catch (e) {}
    if (store.getState().setting.server?.app?.name) {
      this.initiate()
    } else {
      exitApp()
    }
  }

  async initiate () {
    const routeData = {}

    if (store.getState().session.isLoggedIn) {
      await checkUserSession()
    }

    const setting = store.getState().setting
    if (setting.languageCode) {
      await changeLanguage(setting.languageCode)
    } else {
      routeData.routeName = 'PublicLanguage'
    }

    if (routeData && routeData.routeName) {
      setLandingScreen(routeData.routeName, routeData.params)
    }

    this.setState({
      loading: false
    })
  }

  onBeforeLift () {
    this.setState({ storeLoaded: true })
  }

  render () {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={this.onBeforeLift}
        >
          {this.state.loading ? null : <Navigator />}
        </PersistGate>
        <Support />
      </Provider>
    )
  }
}
