import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard,
         LoginPage, 
         Profile, 
         ProfileKeluarga,
         ProfilePendidikan,
         ProfileAsuransi,
         ProfileRekening,
         Sppd,
        } from "../pages";
import  {Colors}  from '../components/Thema'

const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: Colors.thema1.white} }}>
            <Stack.Screen options={{ headerShown:false }} name="LoginPage" component={LoginPage} />
            <Stack.Screen options={{ headerShown:false }} name="Dashboard" component={Dashboard} />


            <Stack.Screen options={{ headerShown:false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ headerShown:false }} name="ProfileKeluarga" component={ProfileKeluarga} />
            <Stack.Screen options={{ headerShown:false }} name="ProfilePendidikan" component={ProfilePendidikan} />
            <Stack.Screen options={{ headerShown:false }} name="ProfileAsuransi" component={ProfileAsuransi} />
            <Stack.Screen options={{ headerShown:false }} name="ProfileRekening" component={ProfileRekening} />



            <Stack.Screen options={{ headerShown:false }} name="Sppd" component={Sppd} />            
        </Stack.Navigator>
    )
}

export default Router;