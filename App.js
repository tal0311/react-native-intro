import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
// cmps
import { Ch1 } from './cmp/Ch1'
import { Ch2 } from './cmp/Ch2'
import { UserDetails } from './cmp/UserDetails'

export default function App() {
  const [details, setDetails] = useState(null)

  const userDetail = (user) => {
    setDetails(user)
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <View>
        <Ch1 />
      </View> */}
      <View>
        <Ch2 userDetail={userDetail} />
      </View>
      {details && (
        <View style={styles.userDetail}>
          <UserDetails user={details} userDetail={userDetail} />
        </View>
      )}
    </View>
  )
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ch2: {
    backgroundColor: 'red',
  },
  userDetail: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 200,
    left: 50,
  },
})
