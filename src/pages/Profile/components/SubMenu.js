import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../components/Thema';



const SubMenu = ({ onClose, swithPage }) => {
  const navigation = useNavigation();
  const actionSubMenu = (opsi) =>{
    onClose();
    setTimeout(() => {navigation.navigate(opsi)}, 500);
  }

  const actionSwitch = (page) => {
    onClose();
    swithPage(page)
  }

  return (
    <View style={styles.subMenuWrapper}>

      <TouchableOpacity onPress={() => actionSwitch("Profile")}>
        <Text style={styles.subMenu}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => actionSwitch("ProfileAsuransi")}>
        <Text style={styles.subMenu}>Data Asuransi</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => actionSwitch("ProfileRekening")}>
        <Text style={styles.subMenu}>Data Rekening</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => actionSwitch("ProfileKeluarga")}>
        <Text style={styles.subMenu}>Data Keuarga</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => actionSwitch("ProfilePendidikan")}>
        <Text style={styles.subMenu}>Data Pendidikan</Text>
      </TouchableOpacity>

      <View style={styles.divide}/>
      
      <TouchableOpacity onPress={() => actionSubMenu("Dashboard")}>
        <Text style={styles.subMenu}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose}>
        <Text style={[styles.closeButton, styles.subMenu]}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubMenu;


const styles = StyleSheet.create({
  divide:{
    marginVertical:15,
    height:2,
    backgroundColor:"#3f3f3f",
  },
  subMenu:{
    paddingLeft:10,
    marginLeft:5,
    marginRight:15,
    borderWidth:0.2,
    paddingVertical:10,
    marginVertical:3,
    borderColor:Colors.thema1.white,
    backgroundColor:Colors.thema1.dark,
    color:Colors.thema1.white,
  },
  subMenuWrapper: {
    flex: 1,
    backgroundColor:"#000879ee",
    marginTop:63,
    width: '50%',
    alignSelf:'flex-start',
  },
  closeButton: {
    marginTop: 10,
    color: 'red',
  },
});