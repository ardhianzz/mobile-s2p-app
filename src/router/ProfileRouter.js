import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../pages";
import  {Colors}  from '../components/Thema'
import ProfileKeluarga from "../pages/Profile/ProfileKeluarga";

const Stack = createStackNavigator();

const ProfileRouter = () => {
    return (
        <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: Colors.thema1.white} }}>
            <Stack.Screen options={{ headerShown:false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ headerShown:false }} name="ProfileKeluarga" component={ProfileKeluarga} />
        </Stack.Navigator>
    )
}

export default ProfileRouter;