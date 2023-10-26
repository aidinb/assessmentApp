import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,Text
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

                <Button onPress={() => navigation.push('GradeSelection')} title={'Sign in'}/>
                <View style={{flexDirection:'row',width:200,alignItems:'center',alignSelf:'center'}}>
                    <Text>Dont have account?</Text>
                    <Button style={{minWidth:30,paddingHorizontal:3}} onPress={() => navigation.push('SignUp')} backgroundColor={false} title={'Sign Up'}/>
                </View>

            </View>

        </KeyboardAvoidingView>
    );
}

