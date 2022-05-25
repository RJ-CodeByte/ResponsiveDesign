import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from '../constants/navigationStrings'

import {
    Login,
    Register,
    ChooseAccount,
    ForgetPassword,
    SetPassword,
} from '../screens';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={Constants.LOGIN} screenOptions={{
            // headerShown: false,
            // headerStyle: { backgroundColor: 'teal', borderRadius: 20, },
            // headerLeft: () => <Image style={{ width: 20, height: 20, justifyContent: 'center', backgroundColor: "black" }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3LMrq3J1Y7ggP8BRmsDj8mk43laqVe8OlA&usqp=CAU' }} />
        }}>
            <Stack.Screen options={{ headerShown: false }} name={Constants.LOGIN} component={Login} />
            <Stack.Screen name={Constants.REGISTER} component={Register} />
            <Stack.Screen name={Constants.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={Constants.FORGET_PASSWORD} component={ForgetPassword} />
            <Stack.Screen name={Constants.SET_PASSWORD} component={SetPassword} />
        </Stack.Navigator>
    );
}
