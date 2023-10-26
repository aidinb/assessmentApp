import React, { useState } from 'react';
import { View, Text, ScrollView, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Grade from '../../components/Grade';
import Button from '../../components/Button';
import Arts from '../../assets/arts.svg';
import ScienceIcon from '../../assets/scienceIcon.svg';
import MathsIcon from '../../assets/mathsIcon.svg';
import CommerceIcon from '../../assets/commerceIcon.svg';
import { screenStyles, typography } from '../../theme/globalStyles';

interface GradeItem {
    id: number;
    name: string;
    icon: () => React.ReactNode;
}

export function GradeSelection() {
    const navigation = useNavigation();

    const [selectedGrade1To5, setSelectedGrade1To5] = useState<string>('');
    const [selectedGrade6To9, setSelectedGrade6To9] = useState<string>('');
    const [selectedGrade10To11, setSelectedGrade10To11] = useState<string>('');
    const [selectedGrade12To13, setSelectedGrade12To13] = useState<string>('');

    const Grade1To5Items: GradeItem[] = [
        { id: 1, name: 'Arts', icon: () => <Arts /> },
        { id: 2, name: 'Science', icon: () => <ScienceIcon /> },
        { id: 3, name: 'Maths', icon: () => <MathsIcon /> },
        { id: 4, name: 'Commerce', icon: () => <CommerceIcon /> },
    ];

    const Grade6To9Items: GradeItem[] = [
        { id: 5, name: 'Arts', icon: () => <Arts /> },
        { id: 6, name: 'Science', icon: () => <ScienceIcon /> },
    ];

    const Grade10To11Items: GradeItem[] = [
        { id: 7, name: 'Maths', icon: () => <MathsIcon /> },
        { id: 8, name: 'Commerce', icon: () => <CommerceIcon /> },
    ];

    const Grade12To13Items: GradeItem[] = [
        { id: 9, name: 'Arts', icon: () => <Arts /> },
        { id: 10, name: 'Science', icon: () => <ScienceIcon /> },
        { id: 11, name: 'Maths', icon: () => <MathsIcon /> },
        { id: 12, name: 'Commerce', icon: () => <CommerceIcon /> },
    ];

    return (
        <View style={screenStyles.container}>
            <Text style={[typography.h1, styles.title]}>What's your grade?</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Grade
                    title="Grade 1-5"
                    items={Grade1To5Items}
                    selectedGrade={selectedGrade1To5}
                    setSelectedGrade={setSelectedGrade1To5}
                />

                <Grade
                    title="Grade 6-9"
                    items={Grade6To9Items}
                    selectedGrade={selectedGrade6To9}
                    setSelectedGrade={setSelectedGrade6To9}
                />

                <Grade
                    title="Grade 10-11"
                    items={Grade10To11Items}
                    selectedGrade={selectedGrade10To11}
                    setSelectedGrade={setSelectedGrade10To11}
                />

                <Grade
                    title="Grade 12-13"
                    items={Grade12To13Items}
                    selectedGrade={selectedGrade12To13}
                    setSelectedGrade={setSelectedGrade12To13}
                />
            </ScrollView>

            <View style={screenStyles.bottomButtons}>
                <Button onPress={() => navigation.push('ProvinceSelection')} title="Next" />
                <Button backgroundColor={false} title="Skip" />
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
});
