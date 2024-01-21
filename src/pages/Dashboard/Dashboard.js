import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = ({title}) => {
  return (
    <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuTitle}>{title}</Text>
    </View>
)}

const Dashboard = () => {
  return (
    <ScrollView>
        <View style={styles.background}>
            <View style={styles.topStatus}>

            </View>

            <View style={styles.avatar}>
              <View style={styles.cover}></View>
            </View>
        </View>

        <View style={styles.devide}></View>


        <ScrollView style={styles.menuWrapper}>
            <View style={styles.menuCover}>
                <Menu title={"Menu 1"} />
                <Menu title={"Menu 2"} />
                <Menu title={"Menu 3"} />
                <Menu title={"Menu 4"} />
                <Menu title={"Menu 5"} />
                <Menu title={"Menu 6"} />
                <Menu title={"Menu 7"} />
                <Menu title={"Menu 8"} />
                <Menu title={"Menu 9"} />
                <Menu title={"Menu 10"} />
            </View>
        </ScrollView>

        <View style={styles.devide}></View>
    </ScrollView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
   menuCover:{
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '95%',
    alignItems: 'flex-start',
   },
   menu: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 70,
    height: 90,
    backgroundColor: 'salmon',
  },
  menuIcon: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 1,
  },
  menuTitle: {
    textAlign: 'center',
    fontWeight: '700',
  },
  menuWrapper: {
    height: 250,
    backgroundColor: 'violet',
  },

  devide:{
    height:10,
    backgroundColor:"purple",
  },
  cover:{
    backgroundColor:"aqua",
    alignSelf:"center",
    margin:5,
    borderWidth:1,
    width:240,
    height:240,
    borderRadius:240/2
  },
  avatar:{
    marginTop:50,
    alignSelf:"center",
    borderRadius:250/2,
    height:250,
    width:250,
    backgroundColor:"black"
  },
  topStatus:{
    borderWidth:1,
    backgroundColor:"white",
    height:50
  },
  
  background:{
    height:340,
    backgroundColor:"skyblue"
  }
})