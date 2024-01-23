import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfileAsuransi = () => {
  return (
    <View>
      <Header pageName={"Profile Asuransi"}/>
      <ScrollView>
        <Text>ProfileAsuransi</Text>
      </ScrollView>
    </View>
  )
}

export default ProfileAsuransi

const styles = StyleSheet.create({})