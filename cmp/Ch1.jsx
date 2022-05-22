import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

export const Ch1 = () => {
  const [isDark, setIsDark] = useState(false)
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const toggleBg = () => {
    setIsDark(!isDark)
  }

  return (
    <View style={isDark ? [styles.dark, styles.ch1] : styles.ch1}>
      <Text style={isDark && styles.lightText}>challenge 1 clock</Text>
      <Image
        source={require('./../assets/11561_Sun.png')}
        style={styles.tinyLogo}
      ></Image>

      <Text onPress={toggleBg} style={styles.txt}>
        {hours}: {minutes} {hours > 12 ? 'PM' : 'AM'}
      </Text>
    </View>
  )
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },

  dark: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#ffff',
  },
  txt: {
    color: '#579fe9',
    fontWeight: 'bold',
  },
  ch1: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 10,
  },
})
