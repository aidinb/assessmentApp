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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function SignUp() {
    const navigation = useNavigation();

    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [pasword, onChangePassword] = useState('');

    return (
        <View style={screenStyles.container}>
            <KeyboardAwareScrollView
                style={screenStyles.container}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="none"
                showsVerticalScrollIndicator={false}
                extraScrollHeight={20}
                contentContainerStyle={{
                    alignItems: 'center', justifyContent: 'center'
                }}
            >
                <SignUpBanner/>
                <InputWithLabel title='Name' onChangeText={onChangeName} value={name}/>
                <InputWithLabel title='Email' onChangeText={onChangeEmail} value={email}/>
                <InputWithLabel title='Password' onChangeText={onChangePassword} value={pasword} secureKeyboard/>
            </KeyboardAwareScrollView>
            <View style={screenStyles.bottomButtons}>
                <Button onPress={() => navigation.push('GradeSelection')} title={'Sign up'}/>
                <View style={{flexDirection: 'row', width: 200, alignItems: 'center', alignSelf: 'center'}}>
                    <Text>You have account?</Text>
                    <Button style={{minWidth: 30, paddingHorizontal: 3}} onPress={() => navigation.push('SignIn')}
                            backgroundColor={false} title={'Sign in'}/>
                </View>
            </View>
        </View>
    );
}

