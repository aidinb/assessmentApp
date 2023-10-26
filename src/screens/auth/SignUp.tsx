import React, {useState} from 'react';
import {
    View,
    Platform, KeyboardAvoidingView, Text
} from 'react-native';
import {screenStyles} from "../../theme/globalStyles";
import SignUpBanner from "../../assets/signUpBanner.svg";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import { useNavigation } from '@react-navigation/native';

import { NativeModules } from "react-native";
export function SignUp() {
    const navigation = useNavigation();

    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [pasword, onChangePassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={screenStyles.container}
        >
            <View style={screenStyles.centerContainer}>
                <SignUpBanner/>
            </View>

            <InputWithLabel title='Name' onChangeText={onChangeName} value={name}/>
            <InputWithLabel title='Email' onChangeText={onChangeEmail} value={email}/>
            <InputWithLabel title='Password' onChangeText={onChangePassword} value={pasword} secureKeyboard/>


            <View style={screenStyles.bottomButtons}>
                <Button onPress={()=>navigation.push('GradeSelection')} title={'Sign up'}/>
                <View style={{flexDirection:'row',width:200,alignItems:'center',alignSelf:'center'}}>
                    <Text>You have account?</Text>
                    <Button style={{minWidth:30,paddingHorizontal:3}} onPress={() => navigation.push('SignIn')} backgroundColor={false} title={'Sign in'}/>
                </View>
            </View>


        </KeyboardAvoidingView>
    );
}

