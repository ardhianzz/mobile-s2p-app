import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Thema'

const ButtonDanger = ({title, size}) => {

  const btnSize = size !== undefined ? size : 5;

  return (
    <View style={[styles.button, { paddingVertical: btnSize }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default ButtonDanger

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.thema1.danger,
    alignItems:"center",
    borderRadius:3,
  },
  text:{
    color: Colors.thema1.white,
    padding:2
  }
})