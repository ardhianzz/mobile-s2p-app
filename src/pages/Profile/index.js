import React, { useState } from 'react';
import { StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import ProfileHome from './ProfileHome';
import ProfileAsuransi from './ProfileAsuransi';
import ProfileRekening  from './ProfileRekening';
import ProfileKeluarga  from './ProfileKeluarga';
import ProfilePendidikan from './ProfilePendidikan'


const Profile = () => {
  const [switchPage, setSwitchPage] = useState("Profile");
  const [pageName, setPageName] = useState(switchPage);


  return (
    <>
      <Header pageName={switchPage} setSwitchPage={setSwitchPage}/>
      <LinearGradient colors={['#ffffff', '#ebebeb',]} style={styles.container}>
        <ScrollView>
         {(switchPage == "Profile") &&<ProfileHome />}
         {(switchPage == "ProfileAsuransi") &&<ProfileAsuransi />}
         {(switchPage == "ProfileRekening") &&<ProfileRekening />}
         {(switchPage == "ProfileKeluarga") &&<ProfileKeluarga />}
         {(switchPage == "ProfilePendidikan") &&<ProfilePendidikan />}
        </ScrollView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile;
