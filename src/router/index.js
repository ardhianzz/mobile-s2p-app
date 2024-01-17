import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard, LoginPage} from "../pages";
import  {Colors}  from '../components/Thema'

const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: Colors.thema1.white} }}>
            <Stack.Screen options={{ headerShown:false }} name="LoginPage" component={LoginPage} />
            <Stack.Screen options={{ headerShown:false }} name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}

export default Router;