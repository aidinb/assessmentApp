import React from 'react';
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {WelcomeScreen} from "../screens/auth/WelcomeScreen";

type AuthRoutes = {
    WelcomeScreen: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const Stack = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
        >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
    );
}
