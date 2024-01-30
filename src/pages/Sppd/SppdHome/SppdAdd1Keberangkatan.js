import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBtn from './components/NavBtn'

const SppdAdd1Keberangkatan = ({setSppdPage}) => {

    const tombolKanan = () => {
        setSppdPage("SppdAdd2Penginapan")
    }
    
    const tombolKiri = () => {
         setSppdPage("Sppd Pengajuan")
     }

  return (
    <View style={styles.container}>
        <Text>INFORMASI KEBERANGKATAN</Text>
        <NavBtn
            onPressKanan={tombolKanan}
            onPressKiri={tombolKiri}
            kiriName='kembali'
            kananName='selanjutnya'
             />
    </View>
  )
}

export default SppdAdd1Keberangkatan



const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:60,
    }
})