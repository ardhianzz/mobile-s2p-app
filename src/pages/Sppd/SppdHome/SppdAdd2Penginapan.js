import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBtn from './components/NavBtn'

const SppdAdd2Penginapan = ({setSppdPage}) => {

    const tombolKanan = () => {
        setSppdPage("SppdAdd3Kepulangan")
    }
    
    const tombolKiri = () => {
         setSppdPage("SppdAdd1Keberangkatan")
     }

  return (
    <View style={styles.container}>
        <Text>INFORMASI PENGINAPAN</Text>
        <NavBtn
            onPressKanan={tombolKanan}
            onPressKiri={tombolKiri}
            kiriName='kembali'
            kananName='selanjutnya'
             />
    </View>
  )
}

export default SppdAdd2Penginapan



const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:60,
    }
})