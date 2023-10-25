import React from 'react'
import { View } from 'react-native';
import PickerItem from "./PickerItem";
import Picker from "./Picker";

export default function Grade(props) {
    const {  selectedGrade, setSelectedGrade, title, items = [] } = props;

    return (
        <Picker title={title}>
            <View style={{
                paddingHorizontal: 10,
                width: '100%',
                flexDirection: 'row',
                marginBottom: 15,
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop:-10

            }}>
            {items.length > 0 ?
            items.map((item)=>{
                const name = item.name
                console.log('GradeItem_'+ item.id)
                return (
                    <PickerItem key={(item) => 'GradeItem_' + item.name+ item.id}
                                selected={selectedGrade === name}
                                onPress={() => setSelectedGrade(name)}
                                icon={item.icon}
                                title={name}/>
                );
            }) : null}
            </View>
        </Picker>
    )
}
