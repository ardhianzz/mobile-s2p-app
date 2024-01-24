import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, Image } from 'react-native';
import SubMenu from './SubMenu';
import { useNavigation } from '@react-navigation/native';
import iconMenu from '../../../assets/Icons/menu-blue.png'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../components/Thema';

const Header = ({pageName = "S2P", setSwitchPage}) => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const namaHalaman = pageName.replace(/([A-Z])/g, ' $1').toUpperCase();


  const openSubMenu = () => {
    setSubMenuVisible(true);
  };

  const closeSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <View>
      <View style={styles.topStatus}>
        <TouchableOpacity onPress={openSubMenu}>
          <View style={styles.iconWrap}>
            <View style={styles.icon}> 
              {/* <Text style={styles.iconText}>Menu</Text> */}
              <Image source={iconMenu} style={styles.iconImage} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.statusNama}>
          <Text style={styles.namaHalaman}>{namaHalaman}</Text>
        </View>
      </View>
      <View style={styles.divide}></View>

      <Modal visible={isSubMenuVisible} transparent animationType='fade'>
        <SubMenu onClose={closeSubMenu} swithPage={setSwitchPage} />
      </Modal>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  divide:{
    height:3,
    backgroundColor:"white",
  },
  namaHalaman:{
    color:Colors.thema1.white,
    fontSize:25,
    marginRight:20,
    fontWeight:"500"
  },
  iconImage:{
    margin:10,
    width:30,
    height:30
  },
  iconText:{
    textAlign:"right",
  },
  icon:{
  },
  iconWrap: {
    justifyContent:"center",
    height:"100%",
    width:100,
  },
  statusNama: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  topStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#06005f',
    height: 60,
  },
});