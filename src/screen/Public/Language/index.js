import React, { Component } from 'react'
import { Platform, Text, View, ImageBackground, ScrollView } from 'react-native'
import RNRestart from 'react-native-restart'

import { Container, Content, Image } from '@component/Basic'
import { Button, Picker } from '@component/Form'
import { __, changeLanguage as i18ChangeLanguage } from '@utility/translation'
import { LightStatusBar } from '@component/StatusBar'

import styles from './styles'
import { bind } from '@utility/component'
import Support from '@component/Support'
import { fetchLanguages } from '@helper/language'
import { connect } from 'react-redux'
import { changeLanguage } from '@store/reducers/setting'
import SplashScreen from 'react-native-splash-screen'
import theme from '@theme/styles'
import Header from '@component/Header'

class Language extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fetching: true,
      languages: [],
      languageCode: ''
    }

    bind(this)

    this.fetch = this.fetch.bind(this)
    this.update = this.update.bind(this)
  }

  async componentDidMount() {
    await this.fetch()
  }

  async fetch() {
    await Support.showLoading()
    await fetchLanguages()
    await this.promisedSetState({
      fetching: false,
      languages: this.props.setting.languages.map(l => ({
        label: l.name,
        value: l.code
      })),
      languageCode: this.props.setting.languageCode || this.props.setting.languageCodeDefault
    })
    await Support.hideLoading()
  }

  async update() {
    if (!this.state.languageCode) {
      Support.showError({
        message: __('Please select a language')
      })
      return
    }

    await Support.showLoading()
    await this.props.changeLanguage(this.state.languageCode)
    await i18ChangeLanguage(this.state.languageCode)
    setTimeout(async () => {
      await Support.hideLoading()
      SplashScreen.show()
      RNRestart.Restart()
    }, 1500)
  }

  render() {
    return (
      <Container>
        <LightStatusBar />
        <Header
          variant='secondary'
          leftType='backarrow'
        />
        <Content style={theme.layout}>
          <View style={styles.lang}>
            <View style={styles.langHeader}>
              <View style={styles.langRow}>
                <Text style={styles.langHeaderTitle}>{__('Language')}</Text>
              </View>
              <View style={styles.langRow}>
                <Text style={styles.langHeaderDesc}>{__('Please select your language')}</Text>
              </View>
            </View>
            <View style={styles.langForm}>
              <View style={styles.langPick}>
                <Picker
                  items={this.state.languages}
                  onChange={v => this.setState({ languageCode: v })}
                  value={this.state.languageCode}
                  showHeader
                  showArrow
                />
              </View>
              <View>
                <Button style={styles.langBtn} onPress={this.update}>
                  <Text style={styles.langBtnText}>{__('Save')}</Text>
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(({ setting }) => ({ setting }), { changeLanguage })(Language)
