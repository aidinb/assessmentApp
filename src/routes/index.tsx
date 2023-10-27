import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './AuthRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { NavigationTheme } from '../theme/globalStyles';
import { useAuthenticate } from '../hooks/useAuthenticate';

export function Routes() {
    const isAuthenticated = useAuthenticate();

    return (
        <NavigationContainer theme={NavigationTheme}>
            {isAuthenticated ? <DashboardRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}
