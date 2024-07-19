import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from '@component/Basic'

import { Button } from '@component/Form'
import { __ } from '@utility/translation'
import styles from '../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemRow}>
        <View style={styles.itemCol}>
          <View style={styles.itemRow}>
            <Text style={styles.itemName} numberofLines={1}>{item.post?.title}</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.itemCode}>{item.transaction_id}</Text>
          </View>
          <View style={styles.itemRow}>
            <View style={[styles.itemFlag, { backgroundColor: item.package?.ribbon }]}>
              <Text style={styles.itemFlagName}>{item.package?.short_name}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.itemRow}>
            <Text style={styles.itemPrice}>{item.amount} {item.package?.currency?.code}</Text>
          </View>
          <View style={[styles.itemRow, { justifyContent: 'flex-end' }]}>
            <Text style={styles.itemDuration}>{item.package?.duration} days</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemBot}>
        <View style={styles.itemBlock}>
          <Icon name='clockcircleo' type='AntDesign' style={styles.itemIcon} />
          <Text style={styles.itemDate}>{item.post?.created_at_formatted}</Text>
        </View>
        <View style={styles.itemBlock}>
          {item.paymentMethod
            ? <Text style={styles.itemPrice}>{__('Paid by')} {item.paymentMethod}</Text>
            : null}
        </View>
      </View>
    </View>
  )
}

export default Item
