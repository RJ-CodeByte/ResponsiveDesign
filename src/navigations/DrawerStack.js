import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screens/DrawerPages/Feed';
import Article from '../screens/DrawerPages/Article';
import { Home } from '../screens';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';
import About from '../screens/DrawerPages/Article';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerStyle: { backgroundColor: '#c6cbef' }, }}>
            <Drawer.Screen name={navigationStrings.TabRoutes} options={{ title: "Home" }} component={TabRoutes} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
}