import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore } from '../screens/tabs/Explore';
import { ClassWork } from '../screens/tabs/ClassWork';
import { Stream } from '../screens/tabs/Stream';
import ExploreTab from '../assets/exploreTab.svg';
import StreamTabDisable from '../assets/streamTabDisable.svg';
import StreamTab from '../assets/streamTab.svg';
import ClassWorkTabDisable from '../assets/classWorkTabDisable.svg';
import ClassWorkTab from '../assets/classWorkTab.svg';
import ExploreTabDisable from '../assets/exploreTabDisable.svg';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ focused, color }) =>
                        focused ? <ExploreTab /> : <ExploreTabDisable />,
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? colors.primary : colors.primaryDark, fontSize: 12 }}>Explore</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Stream"
                component={Stream}
                options={{
                    title: 'Stream',
                    tabBarIcon: ({ focused, color }) => (focused ? <StreamTab /> : <StreamTabDisable />),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? colors.primary : colors.primaryDark, fontSize: 12 }}>Stream</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="ClassWork"
                component={ClassWork}
                options={{
                    title: 'ClassWork',
                    tabBarIcon: ({ focused, color }) => (focused ? <ClassWorkTab /> : <ClassWorkTabDisable />),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? colors.primary : colors.primaryDark, fontSize: 12 }}>ClassWork</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createNativeStackNavigator();

export function DashboardRoutes() {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
