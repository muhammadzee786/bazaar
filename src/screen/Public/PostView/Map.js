import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { __ } from '@utility/translation'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ post }) => {
  if (post.lat && post.lon) {
    return (
      <>
        <View style={styles.postRow}>
          <Text style={styles.postSubTitle}>{__('Map View')}</Text>
        </View>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: post.lat,
              longitude: post.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              coordinate={{
                latitude: post.lat,
                longitude: post.lon
              }}
            />
          </MapView>
        </View>
      </>
    )
  }
  return null
}

export default Map

const styles = {
  container: {
    height: 150,
    marginHorizontal: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 5
  },
  postRow: {
    flexDirecton: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  postSubTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
}
