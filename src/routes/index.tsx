import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './AuthRoutes';
import {colors} from "../theme/colors";
import {NavigationTheme} from "../theme/globalStyles";


export function Routes() {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <AuthRoutes />
        </NavigationContainer>
    );
}
