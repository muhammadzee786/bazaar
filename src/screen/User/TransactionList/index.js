import React from 'react'
import { Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Container, Content, Icon, Text } from '@component/Basic'
import { connect } from 'react-redux'

import Header from '@component/Header'
import { TextInput, Button } from '@component/Form'

import { __ } from '@utility/translation'
import theme from '@theme/styles'
import styles from './styles'

import { DarkStatusBar } from '@component/StatusBar'
import request from '@utility/request'
import { bind } from '@utility/component'

import List from './List'

import { URLS } from '@config/url'
import http from '@utility/http'
import { navigate } from '@navigation'
import NoAuth from '@component/Section/User/Auth/NoAuth'

class TransactionListUI extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetching: true,
      transactions: [],
      total: 0
    }

    bind(this)

    this.fetchTransactions = this.fetchTransactions.bind(this)
  }

  async componentDidMount () {
    await this.fetchTransactions()
  }

  async fetchTransactions () {
    try {
      const params = {
        embed: 'post,paymentMethod,package,currency'
      }
      const r = (await http.get(URLS.PAYMENTS, { params })).data
      const transactions = r.result.data
      await this.promisedSetState({ transactions, total: r.result.meta.total || 0 })
    } catch (e) {
    }
    await this.promisedSetState({
      fetching: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
        />
        <Content style={theme.layout}>
          <ScrollView>

            <View style={theme.header}>
              <View style={theme.headerCol}>
                <Icon name='file-invoice-dollar' type='FontAwesome5' style={theme.headerIcon} />
                <Text style={theme.headerTitle}>{__('Transactions')}</Text>
              </View>
              <View style={theme.headerCol2}>
                <Text style={theme.headerCount}>{this.state.total}</Text>
              </View>
            </View>

            <List
              list={this.state.transactions}
              fetching={this.state.fetching}
            />

          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const TransactionList = (props) => {
  return props.session.isLoggedIn ? <TransactionListUI {...props} /> : <NoAuth />
}

export default connect(({ session }) => ({ session }))(TransactionList)
