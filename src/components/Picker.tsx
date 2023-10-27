import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import useFadeAnimation from "../hooks/useFadeAnimation";

// Define the properties that can be passed to the Picker component.
interface PickerProps {
    title: string; // The title displayed in the picker header.
    children: React.ReactNode; // The content that is revealed when the picker is opened.
    animationSize: number; // The size used for animation (e.g., height) when opening/closing.
}

// Define the Picker component as a React functional component.
const Picker: React.FC<PickerProps> = ({ title, children, animationSize }: PickerProps) => {
    // State to control whether the picker is open or closed.
    const [open, setOpen] = useState(false);
    // Custom hook for managing fade animations.
    const { opacity, size, fadeIn, fadeOut } = useFadeAnimation(0, animationSize);

    // Function to handle the press event and toggle the picker open/closed.
    const onPress = () => {
        if (open) {
            fadeOut(Easing.exp); // Fade out the content when closing.
        } else {
            fadeIn(Easing.exp); // Fade in the content when opening.
        }
        setOpen(!open); // Toggle the open state.
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Ionicons
                    name={open ? 'chevron-up' : 'chevron-down'}
                    size={30}
                    color={colors.subTitle}
                />
            </Pressable>
            <Animated.View style={[styles.containerStyle, { opacity: opacity, height: size, pointerEvents: open ? 'auto' : 'none' }]}>
                {children}
            </Animated.View>
        </View>
    );
};

// Define the styles for the Picker component.
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
    containerStyle: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: -10,
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        minHeight: 60,
        zIndex: 1001,
    },
    title: {
        color: colors.subTitle,
        fontSize: 18,
    },
});

// Export the Picker component as the default export of this module.
export default Picker;
