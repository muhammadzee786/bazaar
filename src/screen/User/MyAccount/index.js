import React from 'react'
import { Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import Header from '@component/Header'
import { __ } from '@utility/translation'

import { Button, TextInput } from '@component/Form'
import theme from '@theme/styles'
import styles from './styles'
import { LightStatusBar } from '@component/StatusBar'
import { bind } from '@utility/component'
import Profile from './Profile'
import CloseAccount from './CloseAccount'
import Tabs from './Tabs'
import Top from './Top'
import NoAuth from '@component/Section/User/Auth/NoAuth'

const tabs = [
  {
    id: 'profile',
    title: 'Account Details',
    renderer: 'renderProfile'
  },
  {
    id: 'close',
    title: 'Close Account',
    renderer: 'renderCloseAccount'
  }
]

class MyAccountUI extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tabs,
      currentTab: tabs[0]
    }

    bind(this)

    this.selectTab = this.selectTab.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
    this.renderCloseAccount = this.renderCloseAccount.bind(this)
  }

  selectTab (currentTab) {
    if (this.state.currentTab?.id != currentTab.id) {
      this.setState({ currentTab })
    }
  }

  renderProfile () {
    return (<Profile session={this.props.session} />)
  }

  renderCloseAccount () {
    return (<CloseAccount session={this.props.session} />)
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
          <ScrollView>
            <Top session={this.props.session} />

            <View style={styles.form}>
              <Tabs
                tabs={this.state.tabs}
                currentTab={this.state.currentTab}
                select={this.selectTab}
              />

              <View style={styles.formContent}>
                {this.state.currentTab ? this[this.state.currentTab.renderer]() : null}
              </View>
            </View>

          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const MyAccount = (props) => {
  return props.session.isLoggedIn ? <MyAccountUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(MyAccount)
