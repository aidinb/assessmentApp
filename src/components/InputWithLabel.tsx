import React, { useState } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { formStyles } from '../theme/globalStyles';
import { FontAwesome } from "@expo/vector-icons";

// Define the properties that can be passed to the InputWithLabel component.
interface InputWithLabelProps {
    title: string; // The label/title for the input field.
    onChangeText: (text: string) => void; // Function to handle text input changes.
    value: string; // The current value of the input field.
    secureKeyboard?: boolean; // Optional flag to enable secure keyboard input (default is false).
}

// Define the InputWithLabel component as a React functional component.
const InputWithLabel: React.FC<InputWithLabelProps> = (
    {
        title,
        onChangeText,
        value,
        secureKeyboard = false,
    }: InputWithLabelProps) => {

    // State to control whether the input is in secure mode (e.g., for password input).
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
                    secureTextEntry={isSecure} // Enable secure text entry if isSecure is true.
                />
                {secureKeyboard ? (
                    // Render an icon to toggle secure input if secureKeyboard is true.
                    <Pressable onPress={() => setIsSecure(!isSecure)} style={{ position: 'absolute', right: 10 }}>
                        <FontAwesome name={isSecure ? 'eye-slash' : 'eye'} size={20} color="black" />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

// Export the InputWithLabel component as the default export of this module.
export default InputWithLabel;
