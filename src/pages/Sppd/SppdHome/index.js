import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../components/Thema'
import { TouchableOpacity } from 'react-native-gesture-handler'
import iconSearch from '../../../assets/Icons/search.png'




const SppdHome = () => {
  return (
    <View style={styles.container}>
        <View style={title.wrapper} >
            <View style={title.title}>
                <Text style={title.titleFont}>Daftar Pengajuan</Text>
            </View>
            <View style={title.btnWrapper}>
                <TouchableOpacity>
                <View style={title.btn}>
                    <Text style={title.btnFont}>Add</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>


      <View style={styles.tableWrapper}>


        <View style={styles.cariWrapper}>
            <View style={styles.cari}>
                <View style={styles.formCari}>
                    <TextInput placeholder='Cari Data' style={styles.inputCari}></TextInput>
                </View>
                <View style={styles.iconCari}>
                    <TouchableOpacity>
                        <Image source={iconSearch} style={{height:20, width:20}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


        <View style={styles.table}>
            <View style={styles.tableRow}>
                <View style={[styles.tableCol, styles.tableHead, {flex:1}]}><Text>No</Text></View>
                <View style={[styles.tableCol, styles.tableHead, {flex:4}]}><Text>Kota Tujuan</Text></View>
                <View style={[styles.tableCol, styles.tableHead, {flex:4}]}><Text>Tanggal</Text></View>
                <View style={[styles.tableCol, styles.tableHead, {flex:2}]}><Text>Status</Text></View>
            </View>

            <View style={styles.tableRow}>
                <View style={[styles.tableCol, {flex:1}]}><Text>No</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Kota Tujuan</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Tanggal</Text></View>
                <View style={[styles.tableCol, {flex:2}]}><Text>Status</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={[styles.tableCol, {flex:1}]}><Text>No</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Kota Tujuan</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Tanggal</Text></View>
                <View style={[styles.tableCol, {flex:2}]}><Text>Status</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={[styles.tableCol, {flex:1}]}><Text>No</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Kota Tujuan</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Tanggal</Text></View>
                <View style={[styles.tableCol, {flex:2}]}><Text>Status</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={[styles.tableCol, {flex:1}]}><Text>No</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Kota Tujuan</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Tanggal</Text></View>
                <View style={[styles.tableCol, {flex:2}]}><Text>Status</Text></View>
            </View>

            <View style={styles.tableRow}>
                <View style={[styles.tableCol, {flex:1}]}><Text>No</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Kota Tujuan</Text></View>
                <View style={[styles.tableCol, {flex:4}]}><Text>Tanggal</Text></View>
                <View style={[styles.tableCol, {flex:2}]}><Text>Status</Text></View>
            </View>
        </View>

        <View style={styles.pageNumberWrapping}>
            <TouchableOpacity style={styles.btnNumbering}>
                <Text style={styles.fontNumbering}>{"<<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNumbering}>
                <Text style={styles.fontNumbering}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNumbering}>
                <Text style={styles.fontNumbering}>{">"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNumbering}>
                <Text style={styles.fontNumbering}>{">>"}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SppdHome
const styles = StyleSheet.create({
    fontNumbering:{
        fontWeight:"800",
    },
    btnNumbering:{
        marginHorizontal:3,
        borderWidth:0.5,
        paddingHorizontal:10,
        backgroundColor:"#f7ffca97",
        borderRadius:3,
    },
    pageNumberWrapping:{
        paddingVertical:5,
        marginTop:10,
        flexDirection:"row",
    },


    inputCari:{
        paddingVertical:2,
        paddingHorizontal:10,
        backgroundColor:"#bad2ff",
        borderRadius:5,
    },
    iconCari:{
        width:"15%",
        justifyContent:"center",
        alignItems:"center",
    },
    formCari:{
        width:"85%",
    },
    cari:{
        padding:2,
        borderRadius:5,
        backgroundColor:Colors.thema1.white,
        width:"100%",
        flexDirection:"row",
    },
    cariWrapper:{
        width:"100%",
        marginVertical:10,
    },



    tableHead:{
        paddingVertical:5,
        borderBottomWidth:1.5,
        alignItems:"center",
    },
    tableCol:{
        flex:1,
        borderWidth:0.2,
        paddingHorizontal:3,
        paddingVertical:3,
    },
    tableRow:{
        flexDirection:"row",
        backgroundColor:"#ffffff65",
    },
    table:{
    },


    tableWrapper:{
        marginVertical:3,
        borderRadius:5,
        padding:10,
        backgroundColor:Colors.thema1.secondary,   
    },
    container:{
        padding:5,
        backgroundColor:Colors.thema1.primary,
        flex:1,
    }
})

const title = StyleSheet.create({
    btn:{
        backgroundColor:Colors.thema1.success,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:5,
    },
    btnWrapper:{
        shadowColor:"black",
        shadowRadius:3,
        elevation:1,
    },

    titleFont:{
        fontWeight:"800",
        fontSize:17,
    },
    title:{
    },
    wrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:5,
        padding:10,
        marginVertical:3,
        backgroundColor:Colors.thema1.secondary,   
    }
});