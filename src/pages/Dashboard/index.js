import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Form, Btn, Icon} from '../../components'

const Dashboard = () => {

  
  return (
    <View>
      <Btn.Primary title={"Tombol Primary"} size={5}/>
      <Btn.Warning title={"Tombol Warning"} size={15}/>
      <Btn.Danger title={"Tombol Danger"} size={30} />

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