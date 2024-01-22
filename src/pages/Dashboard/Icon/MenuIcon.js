
import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Text } from 'react-native'


const MenuIcon = ({title}) => {
    return (
      <View style={styles.menu}>
              <View style={styles.menuIcon}></View>
              <Text style={styles.menuTitle}>{title}</Text>
      </View>
)}

const styles = StyleSheet.create({
    menu: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: 70,
        height: 90,
        backgroundColor: 'salmon',
      },
      menuIcon: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 1,
      },
      menuTitle: {
        textAlign: 'center',
        fontWeight: '700',
      },
});

export default MenuIcon;