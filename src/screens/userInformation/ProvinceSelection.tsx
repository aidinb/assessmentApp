import React, { useState } from 'react';
import { View, Text, ScrollView, NativeModules, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { screenStyles, typography } from '../../theme/globalStyles';
import Button from '../../components/Button';
import { colors } from '../../theme/colors';
import PickerItem from '../../components/PickerItem';
import { sriLanka } from '../../utils/data';

export function ProvinceSelection() {
    const navigation = useNavigation();
    const [selectedProvince, setSelectedProvince] = useState<string>('');

    // Function to save user data and trigger a reload
    const saveUser = async () => {
        try {
            await AsyncStorage.setItem('user', 'test');
            NativeModules.DevSettings.reload();
        } catch (e) {
            // Handle error, possibly send it to analytics
        }
    }

    return (
        <View style={screenStyles.container}>
            <Text style={[typography.h1, styles.title]}>What's your province?</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.provinceContainer}>
                    <Text style={[typography.h3, styles.provinceTitle]}>Provinces of Sri Lanka</Text>
                    <View style={styles.provinceList}>
                        {sriLanka.length > 0 ? sriLanka.map((item) => {
                            const name = item.name;
                            return (
                                <PickerItem
                                    key={name}
                                    selected={selectedProvince === name}
                                    onPress={() => setSelectedProvince(name)}
                                    title={name}
                                />
                            );
                        }) : null}
                    </View>
                </View>
            </ScrollView>
            <View style={screenStyles.bottomButtons}>
                <Button onPress={saveUser} title="Next" />
                <Button onPress={saveUser} backgroundColor={false} title="Skip" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 10,
    },
    scrollViewContent: {
        paddingBottom: 200,
    },
    provinceContainer: {
        width: '90%',
        minHeight: 60,
        backgroundColor: colors.gray,
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
    },
    provinceTitle: {
        color: colors.subTitle,
    },
    provinceList: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 10,
    },
});
