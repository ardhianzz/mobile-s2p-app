import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'



const ProfileAsuransi = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={openModal}>
      <Text>Show Modal</Text>
    </TouchableOpacity>

    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"    >
      <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
        {/* Isi modal */}
        <TouchableOpacity onPress={closeModal}>
          <Text>Close Modal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{position:"absolute", backgroundColor:"blue"}}>
          <Text> Tidak Terjadi APa</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  </View>
);
}

export default ProfileAsuransi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang semi-transparan
  },
})