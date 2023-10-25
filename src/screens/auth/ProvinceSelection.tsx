import {View, Text, Animated,} from "react-native";
import React, { useState } from 'react';
import {screenStyles, typography} from "../../theme/globalStyles";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import ScrollView = Animated.ScrollView;
import {colors} from "../../theme/colors";
import PickerItem from "../../components/PickerItem";

export function ProvinceSelection() {
    const navigation = useNavigation();
    const [selectedProvince, setSelectedProvince] = useState('');

    const sriLanka = [
        {name: 'Central'},
        {name: 'Eastern'},
        {name: 'North Central'},
        {name: 'Northern'},
        {name: 'North Western'},
        {name: 'Sabaragamuwa'},
        {name: 'Southern'},
        {name: 'Uva'},
        {name: 'Western'},
    ]

    return (
        <View style={screenStyles.container}>
            <Text style={[typography.h1, {marginTop: 20, marginLeft: 15, marginBottom: 10}]}>
                What's your province?
            </Text>
            <ScrollView contentContainerStyle={{paddingBottom:200}}>

                <View style={{
                    width: '90%',
                    minHeight: 60,
                    backgroundColor: colors.gray,
                    borderRadius: 8,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop:20,
                    padding:10
                }}>
                    <Text style={[typography.h3,{color:colors.subTitle}]}>
                        Provinces of Sri Lanka
                    </Text>
                    <View style={{
                        paddingHorizontal: 10,
                        width: '100%',
                        flexDirection: 'row',
                        marginBottom: 15,
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        marginTop:10

                    }}>
                        {sriLanka.length > 0 ?
                            sriLanka.map((item)=>{
                                const name = item.name
                                return (
                                    <PickerItem key={(item) => item.name}
                                                selected={selectedProvince === name}
                                                onPress={() => setSelectedProvince(name)}
                                                title={name}/>
                                );
                            }) : null}
                    </View>
                </View>


            </ScrollView>

            <View style={screenStyles.bottomButtons}>
                <Button onPress={() => navigation.push('GradeSelection')} title={'Next'}/>
                <Button backgroundColor={false} title={'Skip'}/>
            </View>
        </View>
    );
}
