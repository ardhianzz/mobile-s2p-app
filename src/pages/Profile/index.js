import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';


const Profile = () => {
  return (
    <View>
      <Header pageName='Profile'/>
      <ScrollView>
        <Text>Profile</Text>
      </ScrollView>
    </View>
  );
};

export default Profile;
