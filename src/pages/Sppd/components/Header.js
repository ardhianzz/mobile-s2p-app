import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import SubMenu from './SubMenu';
import iconAvatar from '../../../assets/Icons/user.png'
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
              <Image source={iconAvatar} style={styles.iconImage} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.statusNama}>
          <Text style={styles.namaHalaman}>{namaHalaman}</Text>
        </View>
      </View>
      <View style={styles.divide}></View>

      <Modal visible={isSubMenuVisible} transparent={true} animationType='fade'>
        <TouchableOpacity onPress={closeSubMenu}>
          <SubMenu onClose={closeSubMenu} swithPage={setSwitchPage} />
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  iconImg:{
    position:"relative",
    zIndex:300,
    top:0,
    backgroundColor:"white",
    width:100,
    height:100,
  },
  divide:{
    height:5,
    backgroundColor:"#FFD700",
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
    marginLeft:10,
    borderRadius:25,
    backgroundColor:"white",
    width:50,
    height:50
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
    backgroundColor: '#000146',
    height: 60,
  },
});