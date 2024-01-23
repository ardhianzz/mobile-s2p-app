import { Alert, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Modal, TouchableOpacity } from 'react-native'
import MenuIcon from './Icon/MenuIcon'
import { Colors } from '../../components/Thema'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dashboard = ({navigation}) => {
  const [openSettins, setOpenSettings] = useState(false); 

  const toggleMenu = () => {
    setOpenSettings(!openSettins);
  }

  const actionSignOut = async () => {
    try {
      const storedData = await AsyncStorage.removeItem('userToken');
  
      if (storedData === null) {
        navigation.replace("LoginPage");
      }
      checkLogin();
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus data dari AsyncStorage:', error);
    }
  }
  const checkLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userToken');
  
      if (storedData === null) {
        navigation.replace("LoginPage");
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data dari AsyncStorage:', error);
    }
  };

  const actionMenu = (opsi = "test") => {
    navigation.navigate(opsi);
  }

  useEffect(() => {
    checkLogin();
  },[]);


  
  return (
    <ScrollView>
        <View style={styles.background}>
            <View style={styles.topStatus}>
              <View>
                <Text style={styles.welcome}>Selamat Datang,</Text>
                <Text style={styles.namaPegawai}>Nama Pegawai</Text>
              </View>
              <TouchableOpacity onPress={() => toggleMenu()}>
                <View style={styles.info}>
                  <Text style={styles.infoSettings}>settings</Text>
                </View>
              </TouchableOpacity>

              <Modal visible={openSettins} transparent animationType='fade'>
                <View style={styles.ModalSettins}>
                    <View style={styles.menuSettins}>
                      <Text>Menu 1</Text>
                    </View>
                    
                    <View style={styles.menuSettins}>
                      <Text>Menu 2</Text>
                    </View>
                    
                    <View style={styles.menuSettins}>
                      <Text>Menu 3</Text>
                    </View>

                    <TouchableOpacity onPress={() => actionSignOut()} style={styles.menuSettins}>
                      <Text>Sign Out</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleMenu()} style={styles.menuSettins}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <View style={styles.avatar}>
              <View style={styles.cover}></View>
            </View>
        </View>

        <View style={styles.divide}></View>


        <ScrollView style={styles.menuWrapper}>
            <View style={styles.menuCover}>
                <TouchableOpacity onPress={() => actionMenu("Profile")}>
                  <MenuIcon title={"Profile"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => actionMenu("Sppd")}>
                  <MenuIcon title={"Sppd"} />
                </TouchableOpacity>

            </View>
        </ScrollView>

        <View style={styles.divide}></View>
    </ScrollView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  menuSettins:{
    flexDirection:"row",
    justifyContent:"flex-end",
    marginVertical:2,
    paddingVertical:8,
    paddingHorizontal:10,
    width:"90%",
    borderWidth:1,
    borderColor:Colors.thema1.dark,
  },
  ModalSettins:{
    paddingRight:10,
    marginTop:80,
    marginLeft:"50%",
    marginRight:10,
    alignItems:"flex-end",
    paddingBottom:10,
    borderBottomStartRadius:10,
    backgroundColor:Colors.thema1.secondary
  },



  infoSettings:{
    fontWeight:"700",
    color:Colors.thema1.white
  },
  info:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:25,
    backgroundColor:Colors.thema1.primary,
  },

  welcome:{
    
  },
  namaPegawai:{
    fontWeight:"800",
    fontSize:25,
    color:Colors.thema1.dark
  },

  topStatus:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
    borderWidth:1,
    backgroundColor:"white",
    height:80
  },
  menuCover:{
   alignSelf: 'center',
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'center',
   maxWidth: '95%',
   alignItems: 'flex-start',
  },
 menuWrapper: {
   height: 250,
   backgroundColor: 'violet',
 },

 divide:{
   height:10,
   backgroundColor:"purple",
 },
 cover:{
   backgroundColor:"aqua",
   alignSelf:"center",
   margin:5,
   borderWidth:1,
   width:240,
   height:240,
   borderRadius:240/2
 },
 avatar:{
   marginTop:50,
   alignSelf:"center",
   borderRadius:250/2,
   height:250,
   width:250,
   backgroundColor:"black"
 }, 
 background:{
   height:370,
   backgroundColor:"skyblue"
 }
})