import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { Text } from '@component/Basic'
import { Button } from '@component/Form'
import { navigate } from '@navigation'
import drawerConfig from '@config/drawer'

import Menu from './Menu'
import styles from './styles'
import { __ } from '@utility/translation'

const Drawer = (props) => {
  let username = 'Guest'
  const location = ''
  let img = require('@asset/images/avatar-dark.png')
  if (props.session.isLoggedIn) {
    username = props.session.user.name
    if (props.session.user.photo_url) {
      img = { uri: props.session.user.photo_url }
    }
  }

  return (
    <View style={styles.drawer}>
      <View style={styles.header}>
        <Button onPress={() => navigate(props.session.isLoggedIn ? 'UserMyAccount' : 'UserLogin')}>
          <Image source={img} style={styles.headerAvatar} />
        </Button>
        <View style={styles.headerCol}>
          <View style={styles.headerRow}>
            <Text style={styles.headerName}>{username}</Text>
          </View>
          {
          location
            ? (
              <View style={styles.headerRow}>
                <Text style={styles.headerDesc}>{location}</Text>
              </View>
              )
            : null
          }
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Menu
            links={props.session.isLoggedIn ? drawerConfig.links.session : drawerConfig.links.public}
            session={props.session}
          />
        </ScrollView>
      </View>
      <View style={styles.bot}>
        {/* <Text style={styles.botText}>{__('App Version 12.0.2')}</Text> */}
      </View>
    </View>
  )
}

export default connect(({ session }) => ({ session }))(Drawer)
