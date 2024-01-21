import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';

const SubMenu = ({ onClose }) => {
  return (
    <View style={styles.subMenuWrapper}>
      <Text style={styles.subMenu}>Sub Menu 1</Text>
      <Text style={styles.subMenu}>Sub Menu 2</Text>
      <Text style={styles.subMenu}>Sub Menu 3</Text>

      <TouchableOpacity onPress={onClose}>
        <Text style={[styles.closeButton, styles.subMenu]}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const openSubMenu = () => {
    setSubMenuVisible(true);
  };

  const closeSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.topStatus}>
        <View style={styles.wrapperIconMenu}>
          <TouchableOpacity onPress={openSubMenu}>
            <View style={styles.icon}>
              <Text>Menu</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.statusNama}>
          <Text>NAMA PEGAWAI</Text>
        </View>
      </View>

      <Modal visible={isSubMenuVisible} transparent animationType='fade'>
        <SubMenu onClose={closeSubMenu} />
      </Modal>
    </ScrollView>
  );
};

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

export default App;
