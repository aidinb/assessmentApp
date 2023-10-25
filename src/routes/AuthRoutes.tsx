import React from 'react';
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {WelcomeScreen} from "../screens/auth/WelcomeScreen";
import {SignIn} from "../screens/auth/SignIn";
import {SignUp} from "../screens/auth/SignUp";
import {GradeSelection} from "../screens/auth/GradeSelection";

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
            <Stack.Screen options={{
                title: 'Welcome Screen',}} name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen options={{
                title: 'Sign In',}} name="SignIn" component={SignIn} />
            <Stack.Screen options={{
                title: 'Sign Up',}} name="SignUp" component={SignUp} />
            <Stack.Screen options={{
                title: 'Picker Selection',}} name="GradeSelection" component={GradeSelection} />
        </Stack.Navigator>
    );
}
