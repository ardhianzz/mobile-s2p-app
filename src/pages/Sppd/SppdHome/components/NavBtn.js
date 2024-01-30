import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../../components/Thema'

const NavBtn = (
    {onPressKiri = () => { alert("tambahkan onPressKiri pada komponen")}, 
    onPressKanan = () => { alert("tambahkan onPressKanan pada komponen")},
    kiriStyle={},
    kananStyle={}, 
    kananName="next", 
    kiriName="Back"}) => {

  return (
    <View style={navBtn.container}>
        <View style={navBtn.wrapper}>
            <TouchableOpacity onPress={onPressKiri}>
                <View style={[navBtn.btn, kiriStyle]}>
                    <Text style={navBtn.btnFont}>{kiriName}</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={onPressKanan}>
                <View style={[navBtn.btn, kananStyle]}>
                    <Text style={navBtn.btnFont}>{kananName}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default NavBtn

const navBtn = StyleSheet.create({
    btnFont:{
        textAlign:"center",
        fontWeight:"600",
        textTransform:"uppercase"
    },
    btn:{
        width:120,
        borderRadius:3,
        paddingVertical:8,
        marginHorizontal:10,
        backgroundColor:"#ffffff",
        borderWidth:0.3,
    },
    wrapper:{
        flexDirection:"row",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-between",
    },
    container:{
        position:"absolute",
        height:60,
        bottom:0,
        width:"100%",
        backgroundColor:"white",
    }
})