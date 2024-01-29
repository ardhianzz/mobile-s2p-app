import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, Image } from 'react-native';
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
      <View style={styles.displayMenu}>
        <TouchableOpacity onPress={() => actionSwitch("SPPD")}>
          <Text style={styles.subMenu}>SPPD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => actionSwitch("Riwayat SPPD")}>
          <Text style={styles.subMenu}>Riwayat SPPD</Text>
        </TouchableOpacity>

        <View style={styles.divide}/>
        
        <TouchableOpacity onPress={() => actionSubMenu("Dashboard")}>
          <Text style={styles.subMenu}> Dashboard </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubMenu;


const styles = StyleSheet.create({
  displayMenu:{
    marginLeft:10,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    paddingBottom:15,
    backgroundColor:"#000879ee",
    paddingTop:10,
    marginTop:60,
    width:"40%",
    alignSelf:'flex-start',
  },
  divide:{
    marginVertical:15,
    height:2,
    backgroundColor:"#3f3f3f",
  },
  subMenu:{
    paddingLeft:15,
    paddingVertical:15,
    borderColor:Colors.thema1.white,
    color:Colors.thema1.white,
  },
  subMenuWrapper: {
    width: '100%',
    height:"100%",
  },
  closeButton: {
    paddingLeft:15,
    paddingVertical:15,
    fontWeight:"600",
    borderColor:Colors.thema1.white,
    backgroundColor:Colors.thema1.secondary,
    color:Colors.thema1.warning,
  },
});