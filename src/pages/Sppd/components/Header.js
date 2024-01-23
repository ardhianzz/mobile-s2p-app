import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import SubMenu from './SubMenu';
import { useNavigation } from '@react-navigation/native';



const Header = ({pageName = "S2P"}) => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

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
              <Text style={styles.iconText}>Menu</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.statusNama}>
          <Text>{pageName}</Text>
        </View>
      </View>

      <Modal visible={isSubMenuVisible} transparent animationType='fade'>
        <SubMenu onClose={closeSubMenu} />
      </Modal>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  iconText:{
    textAlign:"right",
  },
  icon:{
  },
  iconWrap: {
    justifyContent:"center",
    backgroundColor:"salmon",
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
    borderWidth: 1,
    backgroundColor: 'white',
    height: 50,
  },
});