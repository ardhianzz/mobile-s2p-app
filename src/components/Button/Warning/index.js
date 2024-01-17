import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Thema'

const ButtonWarning = ({title, size}) => {

  const btnSize = size !== undefined ? size : 5;

  return (
    <View style={[styles.button, { paddingVertical: btnSize }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default ButtonWarning

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.thema1.warning,
    alignItems:"center",
    borderRadius:3,
  },
  text:{
    color: Colors.thema1.dark,
    padding:2
  }
})