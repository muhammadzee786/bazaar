import React from 'react'

import { Text } from '@component/Basic'
import { Button } from '@component/Form'
import { __ } from '@utility/translation'
import styles from './../styles'

const Item = ({ item, currentTab, select }) => {
  const selected = item.id == currentTab?.id
  const _select = () => select(item)

  return (
    <Button
      style={selected ? styles.tabActive : styles.tab}
      onPress={_select}
    >
      <Text style={selected ? styles.tabActiveText : styles.tabText}>
        {__(item.title)}
      </Text>
    </Button>
  )
}

export default Item
