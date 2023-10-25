import {View, Text, Animated,} from "react-native";
import React, { useState } from 'react';
import {screenStyles, typography} from "../../theme/globalStyles";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import Grade from "../../components/Grade";
import Arts from "../../assets/arts.svg";
import ScienceIcon from "../../assets/scienceIcon.svg";
import MathsIcon from "../../assets/mathsIcon.svg";
import CommerceIcon from "../../assets/commerceIcon.svg";
import ScrollView = Animated.ScrollView;

export function GradeSelection() {
    const navigation = useNavigation();
    const [selectedGrade1To5, setSelectedGrade1To5] = useState('');
    const [selectedGrade6To9, setSelectedGrade6To9] = useState('');
    const [selectedGrade10To11, setSelectedGrade10To11] = useState('');
    const [selectedGrade12To13, setSelectedGrade12To13] = useState('');

    const Grade1To5Items = [
        {id:1,name:'Arts', icon:() => {return (<Arts/>)}},
        {id:2,name:'Science', icon:() => {return (<ScienceIcon/>)}},
        {id:3,name:'Maths', icon:() => {return (<MathsIcon/>)}},
        {id:4,name:'Commerce', icon:() => {return (<CommerceIcon/>)}},
    ]

    const Grade6To9Items = [
        {id:5,name:'Arts', icon:() => {return (<Arts/>)}},
        {id:6,name:'Science', icon:() => {return (<ScienceIcon/>)}},
    ]

    const Grade10To11Items = [
        {id:7,name:'Maths', icon:() => {return (<MathsIcon/>)}},
        {id:8,name:'Commerce', icon:() => {return (<CommerceIcon/>)}},
    ]

    const Grade12To13Items = [
        {id:9,name:'Arts', icon:() => {return (<Arts/>)}},
        {id:10,name:'Science', icon:() => {return (<ScienceIcon/>)}},
        {id:11,name:'Maths', icon:() => {return (<MathsIcon/>)}},
        {id:12,name:'Commerce', icon:() => {return (<CommerceIcon/>)}},
    ]

    return (
        <View style={screenStyles.container}>
            <Text style={[typography.h1, {marginTop: 20, marginLeft: 15, marginBottom: 10}]}>
                What's your grade?
            </Text>
            <ScrollView contentContainerStyle={{paddingBottom:200}}>
                <Grade
                    title='Grade 1-5'
                    items={Grade1To5Items}
                    selectedGrade={selectedGrade1To5}
                    setSelectedGrade={setSelectedGrade1To5}/>

                <Grade
                    title='Grade 6-9'
                    items={Grade6To9Items}
                    selectedGrade={selectedGrade6To9}
                    setSelectedGrade={setSelectedGrade6To9}/>

                <Grade
                    title='Grade 10-11'
                    items={Grade10To11Items}
                    selectedGrade={selectedGrade10To11}
                    setSelectedGrade={setSelectedGrade10To11}/>

                <Grade
                    title='Grade 12-13'
                    items={Grade12To13Items}
                    selectedGrade={selectedGrade12To13}
                    setSelectedGrade={setSelectedGrade12To13}/>
            </ScrollView>

            <View style={screenStyles.bottomButtons}>
                <Button onPress={() => navigation.push('ProvinceSelection')} title={'Next'}/>
                <Button backgroundColor={false} title={'Skip'}/>
            </View>
        </View>
    );
}
