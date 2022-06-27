import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import * as React from 'react';
import HomeStack from './HomeStack';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Routes() {

    const [token, setToken] = React.useState(null);


    React.useEffect(() => {
        AsyncStorage.getItem("myToken").then(tkn => {
            console.log('tkn', tkn)
            setToken(tkn)
        }).catch(err => console.log(err))

    }, [])

    return (
        <NavigationContainer>
            {!token ? <AuthStack /> : <HomeStack />}
        </NavigationContainer>
    );
}




