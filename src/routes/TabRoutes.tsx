import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Explore} from "../screens/tabs/Explore";
import {ClassWork} from "../screens/tabs/ClassWork";
import {Stream} from "../screens/tabs/Stream";

const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Stream" component={Stream} />
            <Tab.Screen name="ClassWork" component={ClassWork} />
        </Tab.Navigator>
    );
};

const Stack = createNativeStackNavigator();

export function DashboardRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Explore"
        >
            <Stack.Screen
                name="MyTabs"
                component={MyTabs}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
