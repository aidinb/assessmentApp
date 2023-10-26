import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../theme/colors';

interface ButtonProps {
    onPress: () => void;
    title?: string;
    backgroundColor?: boolean;
    style?: object;
}

const Button: React.FC<ButtonProps> = React.memo(({ style, onPress, title = 'Next', backgroundColor = true }: ButtonProps) => {
    const buttonStyle: ViewStyle = {
        ...styles.button,
        backgroundColor: backgroundColor ? colors.primary : colors.transparent,
    };

    const textStyle: TextStyle = {
        ...styles.text,
        color: backgroundColor ? colors.white : colors.primary,
        fontWeight: backgroundColor ? 'bold' : 'normal',
    };

    return (
        <TouchableOpacity style={[buttonStyle,{...style}]} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        elevation: 3,
        minWidth: 267,
        height: 61,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Button;
