import { Alert, Image, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Modal, TouchableOpacity } from 'react-native'
import MenuIcon from './Icon/MenuIcon'
import avatarUser from '../../assets/Icons/user.png'
import { Colors } from '../../components/Thema'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient'
import iconSppd from '../../assets/Icons/travel.png'
import iconProfile from '../../assets/Icons/verified.png'


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
    <LinearGradient colors={['#6187da', '#3b5998', '#142a68']} style={styles.container}>
      <ScrollView>
          <View style={styles.background}>
              <View style={styles.topStatus}>
                <View>
                  <Text style={styles.welcome}>Selamat Datang,</Text>
                  <Text style={styles.namaPegawai}>Nama Pegawai</Text>
                </View>
                <TouchableOpacity onPress={() => toggleMenu()}>
                  <View style={styles.info}>
                    <Text style={styles.infoSettings}>Settings</Text>
                    <View style={styles.triangleContainer}>
                      <View style={styles.triangle} />
                    </View>
                  </View>
                </TouchableOpacity>

                <Modal visible={openSettins} transparent animationType='fade'>
                  <View style={styles.ModalSettins}>
                      <TouchableOpacity onPress={() => actionSignOut()} style={styles.menuSettins}>
                        <Text style={styles.textMenuDashboard}>Sign Out</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => toggleMenu()} style={styles.menuSettins}>
                          <Text style={styles.textMenuDashboard}>Close</Text>
                      </TouchableOpacity>
                  </View>
                </Modal>
              </View>

              <View style={styles.avatar}>
                <View style={styles.cover}>
                  <Image source={avatarUser} style={styles.coverImage} resizeMode='cover' />
                </View>
              </View>
          </View>

          <View style={styles.divide}></View>


          <ScrollView style={styles.menuWrapper}>
              <View style={styles.menuCover}>
                  <TouchableOpacity onPress={() => actionMenu("Profile")}>
                    <MenuIcon title={"Profile"} icon={iconProfile} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => actionMenu("Sppd")}>
                    <MenuIcon title={"Perjalanan Dinas"} icon={iconSppd} />
                  </TouchableOpacity>

              </View>
          </ScrollView>
          <View style={styles.divide}></View>

          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>Software Version : 0.1 </Text>
            <Text style={styles.footerText}>IT Support @ PT Sumber Segara Primadaya</Text>
          </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  footerText:{
    textAlign:"center",
    color:"#ffffff9d",
    fontSize:12,
  },
  
  footerInfo:{
    marginVertical:30,
  },

  textMenuDashboard:{
    color:Colors.thema1.white,
    fontWeight:"400",
  },
  triangleContainer: {
    marginLeft:5,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white', 
  },
  triangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuSettins:{
    flexDirection:"row",
    justifyContent:"flex-end",
    marginVertical:5,
    paddingVertical:8,
    paddingHorizontal:10,
    width:"90%",
    backgroundColor:"#3a4092",
    borderRadius:15,
  },

  ModalSettins:{
    paddingRight:10,
    marginTop:50,
    marginLeft:"50%",
    marginRight:30,
    alignItems:"flex-end",
    paddingBottom:10,
  },



  infoSettings:{
    fontWeight:"700",
    color:Colors.thema1.white
  },
  info:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:25,
    flexDirection:"row",
    alignItems:"center",
  },

  welcome:{
    color:Colors.thema1.white
  },
  namaPegawai:{
    fontWeight:"800",
    fontSize:25,
    color:Colors.thema1.white
  },

  topStatus:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
    height:80
  },
  menuCover:{
   alignSelf: 'center',
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'center',
   maxWidth: '100%',
   alignItems: 'flex-start',
  },
 menuWrapper: {
   height: 250,
   paddingTop:10,
   backgroundColor: '#ffffff',
 },

 divide:{
   height:10,
   backgroundColor:"#080079",
 },
 cover:{
   backgroundColor:"#ffffff",
   alignSelf:"center",
   margin:5,
   borderWidth:1,
   width:240,
   height:240,
   borderRadius:240/2
 },
 coverImage: {
  width: '100%',
  height: '100%',
  borderRadius: 240 / 2,
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
   width:"100%",
  //  backgroundColor:"skyblue"
 }
})