import React from 'react';
import { Text, TextInput, View} from 'react-native';
import { formStyles } from '../theme/globalStyles';

interface InputWithLabelProps {
    title: string;
    onChangeText: (text: string) => void;
    value: string;
    secureKeyboard?: boolean;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
                                                           title,
                                                           onChangeText,
                                                           value,
                                                           secureKeyboard = false,
                                                       }: InputWithLabelProps) => {

    return (
        <View style={formStyles.inputWrapper}>
            <Text style={formStyles.label}>{title}</Text>
            <TextInput
                style={formStyles.input}
                onChangeText={onChangeText}
                placeholder={title}
                value={value}
                secureTextEntry={secureKeyboard}
            />
        </View>
    );
};

export default InputWithLabel;
