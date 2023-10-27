import React, { useState } from 'react';
import {
    View, Text,
} from 'react-native';
import { screenStyles} from "../../theme/globalStyles";
import SignInBanner from "../../assets/signInBanner.svg";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import InputWithLabel from "../../components/InputWithLabel";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { useKeyboard } from '@react-native-community/hooks'

export function SignIn() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    // const keyboardHook = useKeyboard()

    return (
        <View style={screenStyles.container}>
            <KeyboardAwareScrollView
                style={screenStyles.container}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="none"
                showsVerticalScrollIndicator={false}
                extraScrollHeight={20}
                contentContainerStyle={{
                    alignItems: 'center', justifyContent: 'center', paddingBottom: 200
                }}
            >
                <SignInBanner/>
                <InputWithLabel title='Email' onChangeText={onChangeEmail} value={email}/>
                <InputWithLabel title='Password' onChangeText={onChangePassword} value={password} secureKeyboard/>

            </KeyboardAwareScrollView>
            {/*{!keyboardHook.keyboardShown ? */}
                <View style={screenStyles.bottomButtons}>
                <Button onPress={() => navigation.push('GradeSelection')} title={'Sign in'}/>
                <View style={{flexDirection: 'row', width: 200, alignItems: 'center', alignSelf: 'center'}}>
                    <Text>Dont have account?</Text>
                    <Button style={{minWidth: 30, paddingHorizontal: 3}} onPress={() => navigation.push('SignUp')}
                            backgroundColor={false} title={'Sign Up'}/>
                </View>
            </View>
                {/*// : null}*/}
        </View>
    );
}

