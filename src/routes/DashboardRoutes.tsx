import React from 'react';
import {NativeModules, Text, Pressable, StyleSheet, Platform} from 'react-native';
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
import {Ionicons} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

// Define the tabs and their configuration for the bottom tab navigator.
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
                        <Text style={[styles.tabLabel,{color: focused ? colors.primary : colors.primaryDark}]}>Explore</Text>
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerRight: props => (
                        <Pressable onPress={async ()=>{
                            await AsyncStorage.setItem('user', '');
                            if(Platform.OS === 'web'){
                                location.reload()
                            }else{
                                NativeModules.DevSettings.reload();
                            }
                        }} style={{flexDirection: 'row', paddingRight: 10}}>
                            <Ionicons
                                name={'log-out-outline'}
                                size={30}
                                color={colors.primary}
                            />
                        </Pressable>
                    )
                }}
            />
            <Tab.Screen
                name="Stream"
                component={Stream}
                options={{
                    title: 'Stream',
                    tabBarIcon: ({ focused, color }) => (focused ? <StreamTab /> : <StreamTabDisable />),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.tabLabel,{color: focused ? colors.primary : colors.primaryDark}]}>Stream</Text>
                    ),
                    tabBarLabelPosition: 'below-icon',
                }}
            />
            <Tab.Screen
                name="ClassWork"
                component={ClassWork}
                options={{
                    title: 'ClassWork',
                    tabBarIcon: ({ focused, color }) => (focused ? <ClassWorkTab /> : <ClassWorkTabDisable />),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.tabLabel,{color: focused ? colors.primary : colors.primaryDark}]}>ClassWork</Text>
                    ),
                    tabBarLabelPosition: 'below-icon',
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createNativeStackNavigator();

// Define the stack navigator that wraps the bottom tab navigator.
export function DashboardRoutes() {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabLabel:{
        fontSize: 12, marginBottom: Platform.OS === 'web' ? 3 : 0,
    }
});
