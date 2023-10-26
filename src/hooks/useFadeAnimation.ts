import { useState } from 'react';
import { Animated, Easing, EasingFunction } from 'react-native';

type UseFadeAnimationResult = {
    opacity: Animated.Value;
    size: Animated.AnimatedInterpolation;
    fadeIn: (easing?: EasingFunction) => void;
    fadeOut: (easing?: EasingFunction) => void;
};

const useFadeAnimation = (initiateOpacity,boxSize=110): UseFadeAnimationResult => {
    const [opacity] = useState(new Animated.Value(initiateOpacity));

    const fadeIn = (easing: EasingFunction = Easing.exp) => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            easing,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = (easing: EasingFunction = Easing.exp) => {
        opacity.setValue(1);
        Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            easing,
            useNativeDriver: false,
        }).start();
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, boxSize],
    });

    return { opacity, size, fadeIn, fadeOut };
};

export default useFadeAnimation;
