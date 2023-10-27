import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

// Define the properties that can be passed to the PickerItem component.
interface PickerItemProps {
    icon?: () => React.ReactNode; // An optional function to render an icon.
    title: string; // The title of the picker item.
    onPress: () => void; // Function to handle the press event.
    selected: boolean; // Flag indicating if the item is selected.
}

// Define the PickerItem component as a React functional component.
const PickerItem: React.FC<PickerItemProps> = ({ icon, title, onPress, selected }: PickerItemProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, { backgroundColor: selected ? colors.primary : colors.grayDarker }]}>
            {icon ? icon() : null} {/* Render the icon if provided. */}
            <Text style={[styles.title, { color: selected ? colors.white : colors.subTitle }]}>{title}</Text>
        </Pressable>
    );
};

// Define the styles for the PickerItem component.
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

// Export the PickerItem component as the default export of this module.
export default PickerItem;
