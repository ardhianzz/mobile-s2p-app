import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfilePendidikan = () => {
  return (
    <View>
      <Header pageName={"Profile Pendidikan"}/>
      <ScrollView>
        <Text>ProfilePendidikan</Text>
      </ScrollView>
    </View>
  )
}

export default ProfilePendidikan

const styles = StyleSheet.create({})