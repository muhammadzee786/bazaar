import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Support from '@component/Support'
import { navigateReset } from '@navigation'
import { clearCurrentUserSession, notifyLogout } from '@helper/user'
import { wait } from '@utility/core'

class Logout extends React.Component {
  async componentDidMount (c) {
    await Support.showLoading()
    const done = notifyLogout()
    if (done) {
      setTimeout(async () => {
        if (this.props.session.isLoggedIn) {
          await clearCurrentUserSession()
          wait(500)
          navigateReset('UserLogin')
        } else {
          navigateReset('UserLogin')
        }
        await Support.hideLoading()
      }, 500)
    } else {
      await Support.showError({
        layout: 'toast',
        message: 'Not able to logout'
      })
      navigateReset('PublicHome')
    }
  }

  render () {
    return <View />
  }
}

const mapStateToProps = (state) => ({
  session: state.session
})

export default connect(mapStateToProps)(Logout)
