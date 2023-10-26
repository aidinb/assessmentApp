import React from 'react'
import { Text, TextInput, View} from 'react-native';
import {formStyles} from "../theme/globalStyles";

export default function InputWithLabel(props) {
    const { title,onChangeText, value, secureKeyboard = false } = props;

    return (
        <View style={formStyles.inputWrapper}>
            <Text style={formStyles.label}>
                {title}
            </Text>
            <TextInput
                style={formStyles.input}
                onChangeText={onChangeText}
                placeholder={title}
                value={value}
                secureTextEntry={secureKeyboard}
            />
        </View>
    )
}
