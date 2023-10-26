import React, {useState} from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import { formStyles } from '../theme/globalStyles';
import {FontAwesome} from "@expo/vector-icons";

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
    const [isSecure, setIsSecure] = useState(secureKeyboard);


    return (
        <View style={formStyles.inputWrapper}>
            <Text style={formStyles.label}>{title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
                style={formStyles.input}
                onChangeText={onChangeText}
                placeholder={title}
                value={value}
                secureTextEntry={isSecure}
            />
            {secureKeyboard ? <TouchableOpacity onPress={() => setIsSecure(!isSecure)}
                                                style={{ position: 'absolute', right: 10 }}>
                <FontAwesome name={isSecure ? 'eye-slash' : 'eye'} size={20} color="black" />
            </TouchableOpacity>: null}
            </View>
        </View>
    );
};

export default InputWithLabel;
