import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBtn from './components/NavBtn'

const SppdAdd4Review = ({setSppdPage}) => {

    const tombolKanan = () => {
        alert("Finish");
    }
    
    const tombolKiri = () => {
         setSppdPage("SppdAdd3Kepulangan")
     }

  return (
    <View style={styles.container}>
        <Text>INFORMASI REVIEW</Text>
        <NavBtn
            onPressKanan={tombolKanan}
            onPressKiri={tombolKiri}
            kiriName='kembali'
            kananName='selanjutnya'
             />
    </View>
  )
}

export default SppdAdd4Review



const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:60,
    }
})