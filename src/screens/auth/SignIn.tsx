import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { screenStyles} from "../../theme/globalStyles";
import SignInBanner from "../../assets/signInBanner.svg";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import InputWithLabel from "../../components/InputWithLabel";

export function SignIn() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={screenStyles.container}
        >
            <View style={screenStyles.centerContainer}>
                <SignInBanner/>
            </View>

            <InputWithLabel title='Email' onChangeText={onChangeEmail} value={email}/>
            <InputWithLabel title='Password' onChangeText={onChangePassword} value={password} secureKeyboard/>

            <View style={screenStyles.bottomButtons}>

                <Button onPress={() => navigation.push('SignUp')} title={'Sign in'}/>
                <Button backgroundColor={false} title={'Dont have account? Sign Up'}/>
            </View>

        </KeyboardAvoidingView>
    );
}

