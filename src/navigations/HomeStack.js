import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from '../constants/navigationStrings'
import TabRoutes from './TabRoutes';
import DrawerStack from './DrawerStack';
import Feed from '../screens/DrawerPages/Feed';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen options={{ headerShown: false }} name={Constants.TabRoutes} component={TabRoutes} /> */}
            <Stack.Screen name={Constants.DrawerStack} component={DrawerStack} />
            {/* <Stack.Screen name={"Feed"} component={Feed} /> */}
        </Stack.Navigator>
    );
}
