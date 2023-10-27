import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import PickerItem from './PickerItem';
import Picker from './Picker';

interface GradeProps {
    selectedGrade: string;
    setSelectedGrade: (grade: string) => void;
    title: string;
    items: { id: number; name: string; icon: () => React.JSX.Element; }[];
}

const Grade: React.FC<GradeProps> = ({ selectedGrade, setSelectedGrade, title, items = [] }: GradeProps) => {
    return (
        <Picker title={title} animationSize={items.length * 30}>
            <View style={styles.containerStyle}>
                {items.length > 0 ? (
                    items.map((item) => (
                        <PickerItem
                            key={'GradeItem_' + item.id}
                            selected={selectedGrade === item.name}
                            onPress={() => setSelectedGrade(item.name)}
                            icon={item.icon}
                            title={item.name}
                        />
                    ))
                ) : null}
            </View>
        </Picker>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: -10,
    },
});

export default Grade;
