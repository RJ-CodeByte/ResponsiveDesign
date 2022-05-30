import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screens/DrawerPages/Feed';
import Article from '../screens/DrawerPages/Article';
import { Home } from '../screens';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={navigationStrings.TabRoutes} component={TabRoutes} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}