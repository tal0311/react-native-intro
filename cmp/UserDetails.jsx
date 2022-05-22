import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'

export const UserDetails = ({ user, userDetail }) => {
  console.log(user)
  const { width, height } = Dimensions.get('window')
  return (
    <View
      style={
        (styles.details,
        { backgroundColor: user.color, width: width - 100, height: height / 3 })
      }
    >
      <Text>user details</Text>
      <Text>{user.username}</Text>
      <Text onPress={() => userDetail(null)}>bacK</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  details: {},
})
