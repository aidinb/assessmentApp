import React from 'react';
import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {GradeSelection} from "../screens/userInformation/GradeSelection";
import {ProvinceSelection} from "../screens/userInformation/ProvinceSelection";

type UserInformationRoutes = {
    GradeSelection: undefined;
    ProvinceSelection: undefined;
};


const Stack = createNativeStackNavigator<UserInformationRoutes>();

export function UserInformationRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="GradeSelection"
        >
            <Stack.Screen options={{
                title: 'Grade Selection',}} name="GradeSelection" component={GradeSelection} />
            <Stack.Screen options={{
                title: 'Province Selection',}} name="ProvinceSelection" component={ProvinceSelection} />
        </Stack.Navigator>
    );
}
