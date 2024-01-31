import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { Colors } from '../../../components/Thema';
import iconEdit from '../../../assets/Icons/edit.png'
import backgroundBPJS from '../../../assets/image/bpjs.png'


const ProfileAsuransi = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);


  const toggleModal = () => {
    setShowModal(! showModal);
  }

  const toogleOption = () => {
      setCardModal(! cardModal);
  }


  return (
    <View style={styles.container}>

      <View style={styles.titleWrapper}>
        <View style={styles.titleName}>
          <Text style={styles.title}>data asuransi</Text>
        </View>

        <View style={styles.titleButtomWrapper}>
          <TouchableOpacity onPress={() => toggleModal() }>
            <View style={[styles.titleButtom,]}>
              <Text style={{fontWeight:"900", fontSize:20,}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>


        <Modal visible={showModal} transparent>
          <View style={styles.latarBelakang}>
            <View style={styles.modalContainer}>
              <View style={styles.formContainer}>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Nama Asuransi</Text>
                  <TextInput 
                      style={styles.input} 
                      placeholderTextColor={"#1b1bff49"}
                      placeholder='Nama Asuransi'
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Perushaan Asuransi</Text>
                  <TextInput 
                      style={styles.input} 
                      placeholderTextColor={"#1b1bff49"}
                      placeholder='Perushaan Asuransi'
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Nomor Polis Asuransi</Text>
                  <TextInput 
                      style={styles.input} 
                      placeholderTextColor={"#1b1bff49"}
                      placeholder='Nomor Polis 
                  Asuransi'/>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Masa Aktif</Text>
                  <TextInput 
                      style={styles.input} 
                      placeholderTextColor={"#1b1bff49"}
                      placeholder='Masa Aktif'
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Lampiran</Text>
                  <TouchableOpacity style={styles.input} >
                    <Text>klsdf</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.modalFooter}>

                  <View style={[styles.modalBtn, styles.simpan]}>
                    <Text>Simpan</Text>
                  </View>

                  <TouchableOpacity onPress={toggleModal}>
                    <View style={[styles.modalBtn, styles.batal]}>
                      <Text>Batal</Text>
                    </View>
                  </TouchableOpacity>
                </View>


              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={[styles.cardContainer]}>
        <ImageBackground source={backgroundBPJS} style={{width:"100%", height:"100%"}} resizeMode='cover'>
          <TouchableOpacity style={styles.cardOption} onPress={toogleOption}>
            <View>
              <Image source={iconEdit} style={{width:20, height:20}}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
                  onPress={toogleOption} 
                  style={[styles.optionCard, cardModal ? {display:'flex'} : {display:'none'}]}>
              <View style={styles.optionTip}>
                <View style={{backgroundColor:"white", paddingRight:10, paddingVertical:3, paddingLeft:9, borderRadius:5}}>
                  <TouchableOpacity style={styles.optionBtn} onPress={() => alert("Rubah")}>
                    <Text style={{fontWeight:"600"}}>Rubah</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionBtn} onPress={() => alert("Hapus")}>
                    <Text style={{fontWeight:"600"}}>Hapus</Text>
                  </TouchableOpacity>
                </View>


              </View>
          </TouchableOpacity>

          <View style={styles.cardBody}>
            <Text style={styles.titleAsuransi}>PROGRAM ASURANSI</Text>
            <Text style={styles.bodyAsuransi}>PT PERUSAHAAN ASURANSI dfsd</Text>
            <Text style={styles.bodyAsuransi}>NO. POLIS </Text>
            <Text style={styles.bodyAsuransi}>MASA BERLAKU</Text>
            <Text></Text>
            <Text style={styles.bodyAsuransi}>Lampiran</Text>
          </View>
        </ImageBackground>
      </View>

    </View>
);
}

export default ProfileAsuransi

const styles = StyleSheet.create({
  batal:{
    backgroundColor:Colors.thema1.warning,
  },
  simpan:{
    backgroundColor:Colors.thema1.success,
  },
  latarBelakang:{
    flex:1,
    backgroundColor:"#00000076",
  },

  modalBtn:{
    paddingHorizontal:10,
    marginLeft:15,
    paddingVertical:5,
    borderRadius:5,
  },
  modalFooter:{
    paddingTop:15,
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingHorizontal:20,
  },
  label:{
    fontWeight:"600",
    paddingVertical:3,
  },
  input:{
    paddingHorizontal:10,
    paddingVertical:0,
    borderWidth:0.5,
    borderRadius:5,
  },
  formGroup:{
    marginVertical:5,
    marginHorizontal:20,
  },
  
  formContainer:{
    width:"90%",
    paddingVertical:30,
    alignSelf:"center",
    backgroundColor:Colors.thema1.white,
    borderColor:"#00000081",
    borderWidth:0.8,
    borderRadius:10,
  },
  modalContainer:{
    flexDirection:"row",
    justifyContent:"center",
    flex:1,
  },





  bodyAsuransi:{
    marginVertical:2,
  },
  titleAsuransi:{
    textTransform:"uppercase",
    fontWeight:"800",
    fontSize:20,
    paddingTop:10,
    paddingBottom:8,
  },
  optionBtn:{
    borderBottomWidth:0.2,
    marginVertical:3,
    width:60,
    marginTop:1,
    padding:3,
  },
  optionTip:{
    justifyContent:"flex-end",
    alignItems:"flex-end",
    width:"100%",
  },
  optionCard:{
    position:"absolute",
    zIndex:100,
    paddingTop:10,
    height:"100%",
    right:0,
    left:0,
    top:0,
  },
  cardBody:{
    position:"relative",
    padding:15,
  },
  cardOption:{
    position:"absolute",
    top:-10,
    right:-10,
    borderRadius:10,
    backgroundColor:Colors.thema1.white,
  },
  cardContainer:{
    margin:5,
    alignSelf:"center",
    borderRadius:8,
    width:"85%",
    maxHeight:210,

    shadowColor:"#000000",
    shadowRadius:100,
    shadowOffset:{
      height:-10,
      width:6, 
    },
    shadowOpacity:1,
    elevation:4,

  },

  container:{
    flex:1,
  },
  titleButtom:{
    backgroundColor:"skyblue",
    paddingHorizontal:10,
    borderRadius:5,
    marginHorizontal:3,
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
    marginBottom:25,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
})