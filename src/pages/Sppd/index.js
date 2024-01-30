import { StyleSheet, Text, View } from 'react-native'
import React, {useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import SppdHome from './SppdHome'
import RiwayatSPPD from './SppdRiwayat'



const Sppd = () => {
  const [switchPage, setSwitchPage] = useState("SPPD");
  const [pageName, setPageName] = useState(switchPage);
  return (
    <LinearGradient colors={['#f1f1f1', '#f1f1f1', '#f1f1f1', '#f1f1f1']} style={styles.container}>
      <Header pageName={switchPage} setSwitchPage={setSwitchPage}/>
      <View style={styles.divide}></View>

      {switchPage == "SPPD" && <SppdHome /> }
      {switchPage == "Riwayat SPPD" && <RiwayatSPPD /> }
    </LinearGradient>
  )
}

export default Sppd

const styles = StyleSheet.create({
  divide:{
    height:5,
    backgroundColor:"#FFD700",
  },
  container:{
    flex:1,
  }
})