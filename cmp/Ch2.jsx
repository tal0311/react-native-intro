import React from 'react'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  Button,
} from 'react-native'
// DATA
import { data } from '../data/users'
// CMPS
import { UserPreview } from './UserPreview'
import { UserList } from './UserList'

export const Ch2 = ({ userDetail }) => {
  const [users, setUsers] = useState(data)
  const [addUser, setAddUser] = useState('')
  const [isInput, setIsInput] = useState(false)

  const handleChange = (ev) => {
    setAddUser(ev)
  }
  const onAddUser = () => {
    console.log('add user', addUser)
    const newUser = {
      id: Date.now().toString(),
      username: addUser,
      favorites: [],
      color: '#b477f4',
    }
    setUsers([...users, newUser])
  }

  const removeUser = (userId) => {
    const updated = users.filter((user) => user.id !== userId)
    setUsers(updated)
  }
  const handlePress = (type, userId) => {
    switch (type) {
      case 'remove':
        removeUser(userId)
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
      <View>
        <Text>challenge 2 </Text>

        <FlatList
          data={users}
          renderItem={({ item }) => (
            <UserPreview user={item} handlePress={handlePress} />
          )}
        />
      </View>

      <Button onPress={() => setIsInput(!isInput)} title={'add user'} />
      {isInput && (
        <View style={styles.inputContainer}>
          <Text>add user</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange}
            onSubmitEditing={onAddUser}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#7777',
    width: 200,
    borderWidth: 1,
    borderColor: '#333',
    padding: 8,
    margin: 10,
  },
})
