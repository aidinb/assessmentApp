import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface PickerItemProps {
    icon?: () => React.ReactNode;
    title: string;
    onPress: () => void;
    selected: boolean;
}

const PickerItem: React.FC<PickerItemProps> = ({ icon, title, onPress, selected }: PickerItemProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor: selected ? colors.primary : colors.grayDarker }]}>
            {icon ? icon() : null}
            <Text style={[styles.title, { color: selected ? colors.white : colors.subTitle }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10.48,
        paddingLeft: 5,
        flexDirection: 'row',
        height: 53,
        width: '48%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
    },
    title: {
        textAlign: 'center',
        fontSize: 16.5,
        width: '70%',
    },
});

export default PickerItem;
