import React, { useEffect } from "react";
import { Text, View } from "react-native";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() =>{
            navigation.replace('Welcome Page');
        }, 2000);
    });


    return (
        <View>
            <Text> Splash Screen gokil</Text>
        </View>
    )
}

export default Splash;