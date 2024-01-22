import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import {Form, Btn, Icon} from '../../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'




const Dashboard = () => {

  const checkLogin = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userToken');
    
        if (storedData !== null) {
          console.log('Data dari AsyncStorage:', storedData);
        } else {
          navigation.replace("LoginPage");
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data dari AsyncStorage:', error);
      }
    };
  

  useEffect(() => {
    checkLogin();
  },[]);
  
  return (
    <View>
      <Btn.Button title={"Tombol Bebas"} size={30} color={"warning"} text={"dark"} />


      <Btn.IconLeft 
          title={"Icon Left"} 
          size={30} 
          color={"primary"} 
          text={"white"} />

      <View style={{padding:14}}></View>
      <Form.FromSecure placeholder={"Test Pengembangan Sistem"} size={10} />
      <Form.Form placeholder={"Test Pengembangan Sistem"} size={10} />

      <View style={{flexDirection:"row"}}>

        <Icon.MenuIcon 
              title={"LEMBUR"} 
              source={"https://png.pngtree.com/png-clipart/20190905/original/pngtree-cartoon-winter-walking-people-download-png-image_4539406.jpg"}
              />

        <Icon.MenuIcon 
              title={"PENGAJUAN SPPD"} 
              source={"https://png.pngtree.com/png-clipart/20190905/original/pngtree-cartoon-winter-walking-people-download-png-image_4539406.jpg"}
              />
      </View>
      
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})