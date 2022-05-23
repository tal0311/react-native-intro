import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'

export const FavPreview = ({ fav }) => {
  const { showName, showDsc } = fav
  return (
    <View style={styles.container}>
      <Text style={styles.favorites}>{showName}</Text>
      <Text style={styles.favorites}>{showDsc}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  favorites: {
    color: '#333',
    padding: 5,
  },
})
