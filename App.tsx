import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.home}>
        <Text>App</Text>
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  home: {backgroundColor:"red", height:100, width:100}
})