import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import * as React from 'react';


export default function Routes() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}