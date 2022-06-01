import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import * as React from 'react';
import HomeStack from './HomeStack';
import { useSelector, useDispatch } from 'react-redux';

import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';


export default function Routes() {
    const { token } = useSelector(state => state.userReducer)
    return (
        <NavigationContainer>
            {!!token ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    );
}