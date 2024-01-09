import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  home: {backgroundColor:"skyblue", height:100, width:100, borderRadius:20, shadowRadius:10}
})