import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, LoginPage, RegisterComponent, WelcomeAuth } from "../pages";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Splash} />
            <Stack.Screen name="Login Page" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterComponent} />
            <Stack.Screen name="Welcome Page" component={WelcomeAuth} />
        </Stack.Navigator>
    )
}

export default Router;