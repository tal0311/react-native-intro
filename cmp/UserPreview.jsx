import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native'

export const UserPreview = ({ user, handlePress }) => {
  const { color } = user
  const { width } = Dimensions.get('window')

  return (
    <View style={{ backgroundColor: color, width: width - 20, padding: 5 }}>
      <Text style={styles.title}>{user.username}</Text>
      <View style={styles.actionContainer}>
        <Text
          onPress={() => handlePress('remove', user.id)}
          style={styles.actions}
        >
          Remove
        </Text>

        <Text
          onPress={() => handlePress('details', user.id)}
          style={styles.actions}
        >
          Details
        </Text>
      </View>
    </View>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#333',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actions: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 6,
  },
})
