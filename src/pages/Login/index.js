import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/image/logo.png'
import loading from '../../assets/Icons/loading.gif'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Api } from '../../api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../components/Thema'
import blueGold from '../../assets/image/bluegold.jpg'


const LoginPage = ({navigation}) => {

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });
  const [statusLogin, setStatusLogin] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

  const changeValue = (value, input) =>{
    setFormLogin({
      ...formLogin, 
      [input] : value,
    });
  }

  const apiLogin = async () => {
    setOnLoading(true);
    try {
      const url = 'login';
      const data = formLogin;
      const response = await Api(url, data);
      setStatusLogin(false);

      await AsyncStorage.setItem('userToken', response.data.token);
      
      navigation.replace("Dashboard");

    } catch (error) {
      setOnLoading(false);
      setStatusLogin(true);
      setFormLogin({
        ...formLogin,
        password: '',
      })
    }
  }

  const checkLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userToken');
  
      if (storedData !== null) {
        navigation.replace("Dashboard");
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data dari AsyncStorage:', error);
    }
  };

  useEffect(() => {
    checkLogin();
  },[]);

  const actionLogin = () => {
    apiLogin();
  }

  return (
    <ImageBackground source={blueGold} style={{ height:"100%", width:"100%" }} resizeMethod='scale' resizeMode='cover'>
          <ScrollView>
            <View style={styles.headerWrapper}>
              <Image source={logo} style={styles.images} />
              <Text style={styles.logoTitle} >PT SUMBER SEGARA PRIMADAYA</Text>
              <Text style={{color:Colors.thema1.white,}}>By IT Support Jakarta</Text>
            </View>

            <View style={styles.formWrapper}>
              <TextInput 
                  style={styles.formInput} 
                  placeholder='username' 
                  value={formLogin.email}
                  placeholderTextColor={"#015e8a"}  
                  onChangeText={value => changeValue(value, 'email')}
              />

              <TextInput 
                style={styles.formInput} 
                placeholder='password'
                placeholderTextColor={"#015e8a"} 
                secureTextEntry
                value={formLogin.password} 
                onChangeText={value => changeValue(value, 'password')} 
              />
              {statusLogin && <Text style={styles.error}> Username atau password salah</Text>}
            </View>


            <View style={styles.submitWrapper}>
              <TouchableOpacity onPressOut={actionLogin}>
                <View style={styles.tombolSubmit}>
                  <Text style={styles.login}>LOGIN</Text>
                  { onLoading && <Image source={loading} style={styles.loadingImage}/>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerFont}>
                Head Office : Treasury Tower, 39th Floor. SCBD - Jakarta Selatan
                Site Office : Jln. Lingkar Timur Desa Karang Kandri, Kecamatan Kesugihan. Cilacap - Jawa Tengah
              </Text>
            </View>
          </ScrollView>
    </ImageBackground>

  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundPage:{
    backgroundColor:Colors.thema1.primary,
  },
  error:{
    color:"#bd7777",
    fontWeight:"300",
    fontSize:12,
    textAlign:"center"
  },
  footerFont:{
    color:Colors.thema1.white,
    textAlign:"center",
    fontSize:12,
  },
  footer:{
    marginTop:50,
  },
  logoTitle:{
    color:Colors.thema1.white,
    paddingTop:20,
    fontWeight:"900",
    fontSize:20,
  },

  submitWrapper:{
    marginHorizontal:50,
  },
  tombolSubmit: {
    flexDirection:"row",
    borderRadius:5,
    backgroundColor:"#000077",
    justifyContent:"center",
    alignItems:"center",
    height:50,

    shadowColor: '#ffffff',
    shadowOffset: { width: 10, height: -9 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 1,
  },
  login:{
    color:"#f7fff0",
    fontWeight:"700"
  },


  headerWrapper:{
    paddingVertical:30,
    marginTop:50,
    alignItems:"center",
  },

  formWrapper:{
    marginHorizontal:50,
    marginVertical:30,
  },

  formInput:{
    margin:10, 
    borderWidth:1,
    borderColor:"#001a6e", 
    borderRadius:5, 
    paddingHorizontal:15,
    color:Colors.thema1.dark,
    backgroundColor:"#dae9ff",
  },

  images: {
    height:100, 
    width:160
  },
  loadingImage:{
    height:35, 
    width:35
  },

})