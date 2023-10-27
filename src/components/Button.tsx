import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../theme/colors';

// Define the properties that can be passed to the Button component.
interface ButtonProps {
    onPress: () => void;         // Function to be called when the button is pressed.
    title?: string;              // Optional button title text (default is 'Next').
    backgroundColor?: boolean;   // Optional flag to determine if the button should have a background color (default is true).
    style?: object;              // Additional styles to be applied to the button.
}

// Define the Button component as a React functional component.
const Button: React.FC<ButtonProps> = React.memo(
    ({ style, onPress, title = 'Next', backgroundColor = true
    }: ButtonProps) => {

    // Define the button's style properties.
    const buttonStyle: ViewStyle = {
        backgroundColor: backgroundColor ? colors.primary : colors.transparent,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        minWidth: 267,
        height: 61,
    };

    // Define the text style properties.
    const textStyle: TextStyle = {
        color: backgroundColor ? colors.white : colors.primary,
        fontWeight: backgroundColor ? 'bold' : 'normal',
        elevation: backgroundColor ? 5 : 0,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
    };

    // Render the Button component with a Pressable wrapper.
    return (
        <Pressable style={[buttonStyle, { ...style }]} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
});

// Export the Button component as the default export of this module.
export default Button;
