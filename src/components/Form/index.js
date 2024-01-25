import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '../Thema'

const Form = ({placeholder, size}) => {
  const formSize = size !== undefined ? size : 5;
  return (
    <View>
      <TextInput 
            style={[styles.input, {paddingVertical: formSize}]}  
            placeholder={placeholder} 
            placeholderTextColor={Colors.thema1.dark}
      />
    </View>
  )
}

const FromSecure = ({placeholder, size}) => {
  const formSize = size !== undefined ? size : 5;
  return (
    <View>
      <TextInput 
            style={[styles.input, {paddingVertical: formSize}]}  
            placeholder={placeholder} 
            placeholderTextColor={Colors.thema1.dark}
            secureTextEntry
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:8,
        borderWidth:1,
        borderRadius:3,
        borderColor: Colors.thema1.dark,
    }
})


export {Form, FromSecure}
