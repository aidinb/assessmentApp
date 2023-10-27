import React from 'react';
import { Pressable, Animated, Dimensions, View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/globalStyles';

const { width } = Dimensions.get('window');
const AnimatedText = Animated.Text;

// Define the properties that can be passed to the RenderFilter component.
interface RenderFilterProps {
    title: string; // The title for the filter section.
    items: string[]; // An array of filter items to be displayed.
    onPress: (item: string) => void; // Function to handle item selection.
    selected: string | null; // The currently selected filter item (if any).
}

// Define the RenderFilter component as a React functional component.
const RenderFilter: React.FC<RenderFilterProps> = ({ title, items, onPress, selected }: RenderFilterProps) => {
    return (
        <Animated.View style={styles.container}>
            <AnimatedText style={typography.subTitle}>{title}</AnimatedText>
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

// Define the styles for the RenderFilter component.
const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 3,
        marginBottom: 15,
        paddingRight: 20,
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

// Export the RenderFilter component as the default export of this module.
export default RenderFilter;
