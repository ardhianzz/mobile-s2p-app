import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import iconEdit from '../../../assets/Icons/edit.png'
import iconAvatar from '../../../assets/Icons/user.png'

const ProfileHome = () => {
  return (
    <View>
        <View style={styles.fotoWrapper}>
          <View style={styles.fotoProfile}>
              <Image source={iconAvatar} resizeMethod='cover' style={styles.foto}></Image>
              
              <View style={styles.iconEditFoto}>
                <TouchableOpacity onPress={() => alert("Upload Gambar")}>
                    <Image source={iconEdit} style={{height:20, width:20,}}></Image>
                  </TouchableOpacity>
              </View>
          </View>
        </View>


        <View style={styles.infoWrapper}>
          <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.rowTitle}>Nama</Text>
                <Text style={styles.rowData}>Nama Pegawai</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Alamat</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>
          </View>


        </View>
        <Text>ProfileHome</Text>
    </View>
  )
}

export default ProfileHome

const styles = StyleSheet.create({
  table:{
    padding:20,
  },
  row:{
    borderBottomWidth:1,
    flexDirection:"row",
  },
  rowData:{
    borderRightWidth:1,
    borderLeftWidth:1,
    flex:2
  },
  rowTitle:{
    borderRightWidth:1,
    borderLeftWidth:1,
    flex:1
  },
  infoWrapper:{
    backgroundColor:"#ffffff7a",
    height:300,
    borderBlockColor:"black",
  },


  



  iconEditFoto: {
    position: 'absolute',
    top: 5, 
    right: 5, 
  },

  foto:{
    height:"100%",
    width:"100%",
  },
  fotoProfile:{
    padding:5,
    width:250,
    height:250,
    borderRadius:10,
    backgroundColor:"white",

    shadowColor: '#000000', // Warna bayangan
    shadowOffset: { width: 3, height: 2 }, // Offset bayangan
    shadowOpacity: 0.9, // Opasitas bayangan
    shadowRadius: 1, // Radius bayangan
    elevation: 3, // Efek bayangan untuk Android


  },
  fotoWrapper:{
    justifyContent:"center",
    alignItems:"center",
    height:300,
    // borderWidth:0.5,
    borderBlockColor:"black",
  }
})