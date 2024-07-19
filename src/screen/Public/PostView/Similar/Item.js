import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@component/Basic'

import styles from '../styles'


import theme from '@theme/styles'
import { navigate } from '@navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <TouchableOpacity style={styles.similarContent} underlayColor='transparent' onPress={() => { navigate('PublicAds') }}>
          <View>
            <Image source={{ uri: item.image }} style={styles.favoriteImg} resizeMode={'contain'} />
            <Icon name='bookmark' type='FontAwesome' style={styles.bookmarkIcon} />
          </View>
          <View style={styles.favoriteInfo}>
            <Text text='bold' size='text12' color='dark' >{item['title_' + this.props.language] || item.title}</Text>
            <View style={theme.row}>
              <Text text='bold' size='text14' color='dark'>€ {item.price}</Text>
            </View>
            <View style={styles.itemPosted}>
              <Icon name='calendar' type='FontAwesome' size='text14' color='grey3' style={styles.calendarIcon} />
              <Text text='regular' size='text12' color='grey' style={styles.itemDate}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
