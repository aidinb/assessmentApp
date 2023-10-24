import {Dimensions, View, Text, Touchable, TouchableOpacityBase} from "react-native";
import React, { useState } from 'react';
import {screenStyles, typography} from "../../theme/globalStyles";
import WelcomeScreenBanner from "../../assets/welcomeScreenBanner.svg"
import Button from "../../components/Button";
import {colors} from "../../theme/colors";

const {width} = Dimensions.get('window');

export function WelcomeScreen() {

    return (
        <View style={screenStyles.container}>
            <View style={screenStyles.centerContainer}>
                <WelcomeScreenBanner/>
            </View>

            <View style={screenStyles.centerContainer}>
                <Text style={typography.titleClean}>
                    Let's find the "A" with us
                </Text>
            </View>

            <View style={screenStyles.centerContainer}>
                <Text style={typography.subTitleClean}>
                    Please Sign in to view personalized
                    recommendations
                </Text>
            </View>

            <View style={[screenStyles.centerContainer,{position:'absolute',bottom:70,height:118,justifyContent: 'space-between',}]}>
               <Button title={'Sign up'}/>
               <Button backgroundColor={false} title={'Skip'}/>
            </View>


        </View>
    );
}
