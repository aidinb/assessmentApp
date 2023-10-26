import React from 'react';
import { TouchableOpacity, Image, Text, View, ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/globalStyles';

interface RenderTeachersProps {
    item: {
        image: string;
        name: string;
        field: string;
    };
    onPress: () => void;
}

const RenderTeachers: React.FC<RenderTeachersProps> = ({ item, onPress }: RenderTeachersProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.field}>{item.field}</Text>
        </TouchableOpacity>
    );
};

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
    name: {
        ...typography.h4,
    },
    field: {
        fontSize: 14,
        color: colors.subTitle,
        marginTop: 5,
    },
});

export default RenderTeachers;
