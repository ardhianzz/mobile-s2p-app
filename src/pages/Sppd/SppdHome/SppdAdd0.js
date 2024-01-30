import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBtn from './components/NavBtn'

const SppdAdd0 = ({setSppdPage}) => {

    const tombolKanan = () => {
        setSppdPage("SppdAdd1Keberangkatan")
    }
    
    const tombolKiri = () => {
         setSppdPage("home")
     }

  return (
    <View style={styles.container}>
        <Text>INFORMASI PENGAJUAN SPPD</Text>
        <NavBtn
            onPressKanan={tombolKanan}
            onPressKiri={tombolKiri}
            kiriName='kembali'
            kananName='selanjutnya'
             />
    </View>
  )
}

export default SppdAdd0



const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:60,
    }
})