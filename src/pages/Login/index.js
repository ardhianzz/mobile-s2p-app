import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/image/logo.png'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const LoginPage = ({navigation}) => {
  
  const actionLogin = () => {
    navigation.replace("Dashboard");
  }

  return (
    <ScrollView>
      <View style={styles.headerWrapper}>
        <Image source={logo} style={styles.images} />
        <Text style={styles.logoTitle} >PT SUMBER SEGARA PRIMADAYA</Text>
        <Text>By IT Support Jakarta</Text>
      </View>

      <View style={styles.formWrapper}>
        <TextInput style={styles.formInput} placeholder='username' />
        <TextInput style={styles.formInput} placeholder='password' secureTextEntry />
        <TextInput style={styles.formInput} placeholder='ngising'></TextInput>
      </View>


      <View style={styles.submitWrapper}>
        <TouchableOpacity onPressOut={actionLogin}>
          <View style={styles.tombolSubmit}>
            <Text style={styles.login}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerFont}>
          Head Office : Treasury Tower, 39th Floor. SCBD - Jakarta Selatan
          Site Office : Jln. Lingkar Timur Desa Karang Kandri, Kecamatan Kesugihan. Cilacap - Jawa Tengah
        </Text>
      </View>
    </ScrollView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  footerFont:{
    textAlign:"center",
    fontSize:12,
  },
  footer:{
    marginTop:50,
  },
  logoTitle:{
    paddingTop:20,
    fontWeight:"900",
    fontSize:20,
  },

  submitWrapper:{
    marginHorizontal:50,
    // backgroundColor:"skyblue",
  },
  tombolSubmit: {
    borderRadius:5,
    borderWidth:2,
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"skyblue",
    height:50
  },
  login:{
    color:"gray",
    fontWeight:"700"
  },


  headerWrapper:{
    paddingVertical:30,
    marginTop:50,
    alignItems:"center",
    // backgroundColor:"aqua"
  },

  formWrapper:{
    marginHorizontal:50,
    marginVertical:30,
    // backgroundColor:"grey"
  },

  formInput:{
    // backgroundColor:"#FFFFF0", 
    margin:10, 
    borderWidth:2, 
    borderRadius:5, 
    paddingHorizontal:15
  },

  images: {
    height:100, 
    width:160
  },

})