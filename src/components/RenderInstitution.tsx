import React from 'react';
import { Pressable, Image, Text, View, Dimensions, ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/globalStyles';

const { width } = Dimensions.get('window');

interface RenderInstitutionProps {
    item: {
        image: string;
        name: string;
        type: string;
        description: string;
    };
    onPress: () => void;
}

const RenderInstitution: React.FC<RenderInstitutionProps> = ({ item, onPress }: RenderInstitutionProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
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
        width: width - 40,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    image: {
        width: 145,
        height: 161,
    },
    infoContainer: {
        width: '60%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    name: {
        ...typography.h3,
    },
    type: {
        fontSize: 14,
        color: colors.black,
        marginTop: 15,
    },
    description: {
        fontSize: 12,
        color: colors.subTitle,
        marginTop: 5,
    },
});

export default RenderInstitution;
