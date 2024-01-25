import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import iconEdit from '../../../assets/Icons/edit.png'
import iconAvatar from '../../../assets/Icons/user.png'
import { Colors } from '../../../components/Thema'

const ProfileHome = () => {
  const [showEdit, setShowEdit] = useState(true);

  const toggleEdit = () => {
    setShowEdit(! showEdit);
  }
  return (
    <View>
        <View style={styles.fotoWrapper}>
          <View style={styles.fotoProfile}>
              <Image source={iconAvatar} resizeMode='cover' style={styles.foto}></Image>
              
              <View style={styles.iconEditFoto}>
                <TouchableOpacity onPress={() => alert("Upload Gambar")}>
                    <Image source={iconEdit} style={{height:20, width:20,}}></Image>
                  </TouchableOpacity>
              </View>
          </View>
        </View>


        <View style={styles.infoWrapper}>

          <View style={styles.titleWrapper}>
            <View style={styles.titleName}>
              <Text style={styles.title}>A. Data Umum</Text>
            </View>

            <View style={styles.titleButtomWrapper}>

              {(! showEdit) && 
              <TouchableOpacity>
                <View style={styles.titleButtom}>
                  <Text style={styles.buttom}>Save</Text>
                </View>
              </TouchableOpacity>
              }

              <TouchableOpacity onPress={() => toggleEdit() }>
                <View style={[styles.titleButtom, (!showEdit) && {backgroundColor:Colors.thema1.warning}]}>
                  <Text style={styles.buttom}>{showEdit ? "Edit" : "Close"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.rowTitle}>Nama</Text>
                { showEdit 
                   ? <Text style={styles.rowData}>Nama Pegawai</Text> 
                   : <TextInput 
                       style={styles.rowInput} 
                       placeholder='Nama Pegawai'
                       placeholderTextColor={"#a3a3a3"}
                   />
                }
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>E-Mail</Text>
                { showEdit 
                   ? <Text style={styles.rowData}>Email Pegawai</Text> 
                   : <TextInput 
                       style={styles.rowInput} 
                       placeholder='Email Pegawai'
                       placeholderTextColor={"#a3a3a3"}
                   />
                }
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>NIK</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Divisi</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Jabatan</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Lokasi</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>


          </View>
        </View>
        
        <View style={styles.infoWrapper}>
          <View style={styles.titleWrapper}>
            <View style={styles.titleName}>
              <Text style={styles.title}>B. Data Personal</Text>
            </View>

            <View style={styles.titleButtomWrapper}>

              {(! showEdit) && 
              <TouchableOpacity>
                <View style={styles.titleButtom}>
                  <Text style={styles.buttom}>Save</Text>
                </View>
              </TouchableOpacity>
              }

              <TouchableOpacity onPress={() => toggleEdit() }>
                <View style={[styles.titleButtom, (!showEdit) && {backgroundColor:Colors.thema1.warning}]}>
                  <Text style={styles.buttom}>{showEdit ? "Edit" : "Close"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.rowTitle}>E-Mail</Text>
                { showEdit 
                   ? <Text style={styles.rowData}>Nama Pegawai</Text> 
                   : <TextInput 
                       style={styles.rowInput} 
                       placeholder='Nama Pegawai'
                       placeholderTextColor={"#a3a3a3"}
                   />
                }
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Telepon</Text>
                { showEdit 
                   ? <Text style={styles.rowData}>Email Pegawai</Text> 
                   : <TextInput 
                       style={styles.rowInput} 
                       placeholder='Email Pegawai'
                       placeholderTextColor={"#a3a3a3"}
                   />
                }
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>No. KTP</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Alamat</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.rowTitle}>Kontak Darurat</Text>
                <Text style={styles.rowData}>Alamat Pegawai</Text>
            </View>

          </View>
        </View>
    </View>
  )
}

export default ProfileHome

const styles = StyleSheet.create({
  titleButtom:{
    backgroundColor:"skyblue",
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:5,
    marginHorizontal:3,

    shadowColor:"black",
    shadowOffset:{height:2, width:0},
    shadowOpacity:1,
    shadowRadius:2,
    elevation:3,
  },
  title:{
    fontWeight:"800",
    fontSize:16,
    textTransform:"uppercase",
  },
  titleName:{
    flex:1,
  },
  titleButtomWrapper:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end"
  },

  titleWrapper:{
    height:50,
    paddingHorizontal:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },




  table:{
    padding:20,
  },
  row:{
    borderBottomWidth:0.3,
    borderTopWidth:0.3,
    flexDirection:"row",
  },
  rowInput:{
    flex:2,
    borderWidth:0.1,
    // backgroundColor:"#8c8cea",
    borderRadius:2,
    marginLeft:10,
    paddingHorizontal:10,
    height:40,
  },
  rowData:{
    // borderRightWidth:1,
    // borderLeftWidth:1,
    // color:Colors.thema1.dark,
    marginLeft:6,
    flex:2,
    paddingVertical:12,
    paddingLeft:10,
    // backgroundColor:"#f1b0b0",
  },
  rowTitle:{
    color:Colors.thema1.dark,
    fontWeight:"600",
    paddingVertical:12,
    // borderRightWidth:1,
    // borderLeftWidth:1,
    flex:1
  },




  infoWrapper:{
    paddingVertical:15,
    // borderTopWidth:5,
    // borderColor:Colors.thema1.white,
    backgroundColor:"#ffffff7a",
    // height:300,
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