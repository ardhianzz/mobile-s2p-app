import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBtn from './components/NavBtn'

const SppdAdd3Kepulangan = ({setSppdPage}) => {

    const tombolKanan = () => {
        setSppdPage("SppdAdd4Review")
    }
    
    const tombolKiri = () => {
         setSppdPage("SppdAdd2Penginapan")
     }

  return (
    <View style={styles.container}>
        <Text>INFORMASI KEPULANGAN</Text>
        <NavBtn
            onPressKanan={tombolKanan}
            onPressKiri={tombolKiri}
            kiriName='kembali'
            kananName='selanjutnya'
             />
    </View>
  )
}

export default SppdAdd3Kepulangan



const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:60,
    }
})