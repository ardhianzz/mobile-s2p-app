
import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import iconApp from '../../../assets/Icons/app.png';
import { Colors } from '../../../components/Thema';


const MenuIcon = ({title, icon=null}) => {
    const iconGambar = icon ? icon : iconApp;
    return (
      <View style={styles.menu}>
          <View style={styles.menuIcon}>
            <Image source={iconGambar} resizeMode='cover' style={styles.iconImage} />
          </View>
          <Text style={styles.menuTitle}>{title}</Text>
      </View>
)}

const styles = StyleSheet.create({
    iconImage:{
      height:"100%",
      width:"100%",
      borderRadius:100,
    },
    menu: {
      marginHorizontal: 10,
      marginVertical: 15,
      width: 70,
      height: 100,
    },
    menuIcon: {
      width: 70,
      height: 70,
      borderRadius: 70 / 2,
      
      shadowColor: '#79797999', // Warna bayangan
      shadowOffset: { width: 0, height: 2 }, // Offset bayangan
      shadowOpacity: 0.9, // Opasitas bayangan
      shadowRadius: 1, // Radius bayangan
      elevation: 3, // Efek bayangan untuk Android
      },
    menuTitle: {
      textAlign: 'center',
      fontWeight: '800',
      color:Colors.thema1.dark,
    },
});

export default MenuIcon;