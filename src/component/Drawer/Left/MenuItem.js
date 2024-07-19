import React from 'react'
import { View } from 'react-native'
import { Text, Icon } from '@component/Basic'
import { Button } from '@component/Form'

import { closeDrawer, navigate, navigateReset } from '@navigation'
import { __ } from '@utility/translation'

import styles from './styles'

const MenuItem = ({ menu }) => {
    return (
        <Button
            key={menu.name}
            style={styles.item}
            underlayColor='transparent'
            onPress={() => {
                closeDrawer()
                if (menu.route === 'UserLogout') {
                    navigateReset(menu.route)
                } else {
                    navigate(menu.route, menu.params || {})
                }
            }}
        >
            <View style={styles.col}>
                <Icon name={menu.iconName} type={menu.iconType} style={styles.itemIcon} />
            </View>
            <Text style={styles.itemText}>{__(menu.name)}</Text>
        </Button>
    )
}

export default MenuItem
