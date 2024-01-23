import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfileKeluarga = () => {
  return (
    <View>
      <Header pageName={"Profile Keluarga"}/>
      <ScrollView>
        <Text>ProfileKeluarga</Text>
      </ScrollView>
    </View>
  )
}

export default ProfileKeluarga

const styles = StyleSheet.create({})