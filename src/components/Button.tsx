import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import {colors} from "../theme/colors";

export default function Button(props) {
    const { onPress, title = 'Save', backgroundColor = true } = props;
    return (
        <Pressable style={[styles.button,{backgroundColor: backgroundColor?colors.primary:colors.transparent}]} onPress={onPress}>
            <Text style={[styles.text,{color:backgroundColor? colors.white : colors.primary, fontWeight: backgroundColor?'bold': 'normal',}]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        elevation: 3,
        width:267,
        height: 61
    },
    text: {
        fontSize: 16,
        lineHeight: 21,

        letterSpacing: 0.25,
        color: 'white',
    },
});
