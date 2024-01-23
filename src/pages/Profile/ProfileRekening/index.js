import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfileRekening = () => {
  return (
    <View>
      <Header pageName={"Profile Rekening"}/>
      <ScrollView>
        <Text>ProfileRekening</Text>
      </ScrollView>
    </View>
  )
}

export default ProfileRekening

const styles = StyleSheet.create({})