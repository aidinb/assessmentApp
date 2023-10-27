import React from 'react';
import { Pressable, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/globalStyles';

// Define the properties that can be passed to the RenderTeachers component.
interface RenderTeachersProps {
    item: {
        image: string; // URL or path to the teacher's image.
        name: string; // The name of the teacher.
        field: string; // The field or subject taught by the teacher.
    };
    onPress: () => void; // Function to handle the press event on the teacher item.
}

// Define the RenderTeachers component as a React functional component.
const RenderTeachers: React.FC<RenderTeachersProps> = ({ item, onPress }: RenderTeachersProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <Text style={typography.h4}>{item.name}</Text>
            <Text style={styles.field}>{item.field}</Text>
        </Pressable>
    );
};

// Define the styles for the RenderTeachers component.
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 10,
        justifyContent: 'flex-start',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowColor: colors.shadow,
        shadowRadius: 3,
        alignItems: 'flex-start',
    },
    image: {
        width: 110,
        height: 115,
        marginBottom: 10,
    },
    field: {
        fontSize: 14,
        color: colors.subTitle,
        marginTop: 5,
    },
});

// Export the RenderTeachers component as the default export of this module.
export default RenderTeachers;
