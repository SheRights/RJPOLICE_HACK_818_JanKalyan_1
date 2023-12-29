import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const SplashScreen = ({navigation}) => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <TouchableOpacity onPress={() => {navigation.replace('Bottomtab');}}>
        <Text>Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})