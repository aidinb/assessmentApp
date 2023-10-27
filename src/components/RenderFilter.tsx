import React from 'react';
import { Pressable, Animated, Dimensions, View, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/globalStyles';

const { width } = Dimensions.get('window');
const AnimatedText = Animated.Text;

interface RenderFilterProps {
    title: string;
    items: string[];
    onPress: (item: string) => void;
    selected: string | null;
}

const RenderFilter: React.FC<RenderFilterProps> = ({ title, items, onPress, selected }: RenderFilterProps) => {
    return (
        <Animated.View style={styles.container}>
            <AnimatedText style={styles.title}>{title}</AnimatedText>
            <View style={styles.itemsContainer}>
                {items.length > 0
                    ? items.map((item) => (
                        <Pressable
                            key={item}
                            onPress={() => onPress(item)}
                            style={[
                                styles.item,
                                { backgroundColor: selected === item ? colors.primary : colors.white },
                            ]}
                        >
                            <AnimatedText>{item}</AnimatedText>
                        </Pressable>
                    ))
                    : null}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 3,
        marginBottom: 15,
        paddingRight:20
    },
    title: {
        ...typography.subTitle,
    },
    itemsContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        marginTop: 10,
        borderRadius: 8,
        padding: 7,
        marginRight: 5,
        paddingHorizontal: 15,
    },
});

export default RenderFilter;
