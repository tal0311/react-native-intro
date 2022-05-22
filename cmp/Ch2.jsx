import React from 'react'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'
// DATA
import { small } from '../data/users'
// CMPS
import { UserPreview } from './UserPreview'
import { UserList } from './UserList'

export const Ch2 = ({ userDetail }) => {
  const [users, setUsers] = useState(small)

  const handlePress = (type, userId) => {
    switch (type) {
      case 'remove':
        break

      case 'details':
        const user = users.find((user) => user.id === userId)
        userDetail(user)
        break
    }
  }

  if (!users) return <Text>Loading data...</Text>
  return (
    <View>
      <Text>challenge 2</Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserPreview user={item} handlePress={handlePress} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
