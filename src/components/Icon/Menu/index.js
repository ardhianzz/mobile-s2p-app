import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserIcon from '../../../assets/Icons/user.png'

const MenuIcon = ({title, source}) => {

const selectedSource = source !== undefined ? {uri: source} : UserIcon;

return (
    <View style={styles.container}>
        <View style={styles.icon}>
            <Image 
                resizeMode='cover'
                source={selectedSource} 
                style={styles.image} />
        </View>
        <Text style={styles.titleMenu}>{title}</Text>
    </View>
  )
}

export default MenuIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        maxWidth:120,
    },
    image:{
        width:100,
        height:100,
        maxHeight:100,
        maxWidth:100,
        borderRadius:100/2,
    },
    icon:{
        justifyContent:"center",
        alignItems:"center",
        width:120,
        height:120,
        borderRadius:120/2,
        backgroundColor:"white"
    },
    titleMenu:{
        fontSize:15,
        fontWeight:"600",
        paddingTop:5,
        textAlign:"center"
    },
})