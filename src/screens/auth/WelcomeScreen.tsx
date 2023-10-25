import { View, Text } from "react-native";
import React from 'react';
import {screenStyles, typography} from "../../theme/globalStyles";
import WelcomeScreenBanner from "../../assets/welcomeScreenBanner.svg"
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';

export function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={screenStyles.container}>
            <View style={screenStyles.centerContainer}>
                <WelcomeScreenBanner/>
            </View>

            <View style={screenStyles.centerContainer}>
                <Text style={typography.title}>
                    Let's find the "A" with us
                </Text>
            </View>

            <View style={screenStyles.centerContainer}>
                <Text style={typography.subTitle}>
                    Please Sign in to view personalized
                    recommendations
                </Text>
            </View>

            <View style={screenStyles.bottomButtons}>
               <Button onPress={()=>navigation.push('SignIn')} title={'Sign up'}/>
               <Button backgroundColor={false} title={'Skip'}/>
            </View>

        </View>
    );
}
