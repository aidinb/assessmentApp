import React from 'react'
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import {colors} from "../theme/colors";
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
