import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const SubMenu = ({ onClose }) => {
  const navigation = useNavigation();
  const actionSubMenu = (opsi) =>{
    onClose();
    setTimeout(() => {navigation.navigate(opsi)}, 500);
  }

  return (
    <View style={styles.subMenuWrapper}>

      <TouchableOpacity onPress={() => actionSubMenu("Dashboard")}>
        <Text style={styles.subMenu}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => actionSubMenu("RiwayatPengajuan")}>
        <Text style={styles.subMenu}>Riwayat SPPD</Text>
      </TouchableOpacity>

    
      <TouchableOpacity onPress={onClose}>
        <Text style={[styles.closeButton, styles.subMenu]}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubMenu;


const styles = StyleSheet.create({
  subMenu:{
    paddingLeft:10,
    marginLeft:5,
    marginVertical:5,
    paddingVertical:10,
    borderWidth:1,
  },
  icon: {
    alignItems: 'center',
  },
  statusNama: {
    backgroundColor: 'salmon',
    justifyContent: 'center',
    paddingRight: 10,
  },
  wrapperIconMenu: {
    height: '100%',
    width: 70,
    backgroundColor: 'salmon',
  },
  topStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 50,
  },
  subMenuWrapper: {
    flex: 1,
    paddingTop:10,
    marginTop:50,
    backgroundColor: 'lightblue',
    width: '50%',
    alignSelf:'flex-start',
  },
  closeButton: {
    marginTop: 10,
    color: 'red',
  },
});