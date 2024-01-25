import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Thema'

const IconLeft = ({title, size, color, text}) => {

    const btnSize = size !== undefined ? size : 5;
    const btnColor = color !== undefined ? color : "primary";
    const btnText = text !== undefined ? text : "white";


  return (
    <View style={[styles.button, { paddingVertical: btnSize, backgroundColor: Colors.thema1[btnColor], }]}>
      <Text style={[styles.text, {color: Colors.thema1[btnText]}]}>{title}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    borderRadius:3,
  },
  text:{
    
    padding:2
  }
})


export default IconLeft