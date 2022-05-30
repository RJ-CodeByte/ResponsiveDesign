import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import Profile from '../screens/Profile/Profile';
import Booking from '../screens/Booking/Booking';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';


const BottomTab = createBottomTabNavigator();

export default function TabRoutes({route}) {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.themeColor,
                tabBarInactiveTintColor: colors.black
            }}
        >
            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return <FontAwesome5 size={20} color={focused ? colors.themeColor : colors.black} name={'home'} />
                }
            }} name="Home" component={Home} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return <FontAwesome5 color={focused ? colors.themeColor : colors.black} size={20} name={'book'} />
                }
            }} name="Profile" component={Profile} initialParams={{ data: null }} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return <FontAwesome5 color={focused ? colors.themeColor : colors.black} size={20} name={'user'} />
                }
            }} name="Booking" component={Booking} />
        </BottomTab.Navigator>
    );
}