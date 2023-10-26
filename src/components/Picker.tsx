import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

interface PickerProps {
    title: string;
    children: React.ReactNode;
}

const Picker: React.FC<PickerProps> = ({ title, children }: PickerProps) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setOpen(!open)}
                style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Ionicons
                    name={open ? 'chevron-up' : 'chevron-down'}
                    size={30}
                    color={colors.subTitle}
                />
            </TouchableOpacity>
            {open ? children : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        minHeight: 60,
        backgroundColor: colors.gray,
        borderRadius: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        color: colors.subTitle,
        fontSize: 18,
    },
});

export default Picker;
