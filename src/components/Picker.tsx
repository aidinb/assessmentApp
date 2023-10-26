import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    EasingFunction,
    Easing
} from 'react-native';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

interface PickerProps {
    title: string;
    children: React.ReactNode;
}

const Picker: React.FC<PickerProps> = ({ title, children }: PickerProps) => {
    const [open, setOpen] = useState(false);

    const [opacity, setOpacity] = useState(new Animated.Value(0));

    const fadeIn = (easing: EasingFunction) => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            easing,
            useNativeDriver:false
        }).start();
    };

    const fadeOut = (easing: EasingFunction) => {
        opacity.setValue(1);
        Animated.timing(opacity, {
            toValue: 0,
            duration: 600,
            easing,
            useNativeDriver:false
        }).start();
    };
    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 110],
    });

    const onPress = () =>{
        if(open) {
            fadeOut(Easing.exp)
        }else {
            fadeIn(Easing.exp)
        }
        setOpen(!open)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Ionicons
                    name={open ? 'chevron-up' : 'chevron-down'}
                    size={30}
                    color={colors.subTitle}
                />
            </TouchableOpacity>
            <Animated.View style={[styles.containerStyle, {opacity: opacity, height: size}]}>
                {children}
            </Animated.View>
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
    containerStyle:{
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
    },
    title: {
        color: colors.subTitle,
        fontSize: 18,
    },
});

export default Picker;
