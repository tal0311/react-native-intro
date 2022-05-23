import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'

import { FavPreview } from './FavPreview'

export const UserDetails = ({ user, userDetail }) => {
  const { width, height } = Dimensions.get('window')
  return (
    <View
      style={
        (styles.details,
        {
          backgroundColor: user.color,
          width: width - 100,
          height: height / 3,
          borderColor: '#333',
          borderWidth: 4,
        })
      }
    >
      <FlatList
        data={user.favorites}
        renderItem={({ item }) => <FavPreview fav={item} />}
      />
      <Text style={styles.actions} onPress={() => userDetail(null)}>
        Back
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  actions: {
    textAlign: 'center',
    margin: 5,
  },
})
