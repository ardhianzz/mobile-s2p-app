import { Image, StyleSheet,  View } from 'react-native'
import React from 'react'

const loading = () => {
  return (
    <View style={{flex:1, backgroundColor:"#c7c7c76e", justifyContent:'center', alignItems:"center"}}>
      <Image source={require("../../../assets/image/logo.png")} style={{height:50, width:80}} />
    </View>
  )
}

export default loading

const styles = StyleSheet.create({})