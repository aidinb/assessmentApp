import React, { useState } from 'react';
import {
    Dimensions,
    RefreshControl,
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    TouchableOpacity, Animated
} from 'react-native';
import {formStyles, screenStyles, typography} from "../../theme/globalStyles";
import {colors} from "../../theme/colors";
import ProPic from "../../assets/proPic.svg"
import PipeIcon from "../../assets/pipeIcon.svg"
import FilterIcon from "../../assets/filterIcon.svg"
import SearchIcon from "../../assets/searchIcon"
import ScrollView = Animated.ScrollView;
import { FlashList } from "@shopify/flash-list";
import RenderInstitution from "../../components/RenderInstitution";
import RenderTeachers from "../../components/RenderTeachers";
import {institutions, teachers} from "../../utils/data";

// Get the width of the device's window
const {width} = Dimensions.get('window');

export function Explore() {
    const [search, setSearch] = useState('');

    const RowWrapper = (props)=>{
        return (
            <View style={{
                padding: 20,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {props.children}
            </View>
        )
    }





    const renderTeachers = React.useCallback(
        ({item}: {item: any}) => {
            return <RenderTeachers item={item} onPress={()=>alert(`${item.name} Press!`)} />;
        },
        [],
    );

    const renderInstitution = React.useCallback(
        ({item}: {item: any}) => {
            return <RenderInstitution item={item} onPress={()=>alert(`${item.name} Press!`)} />;
        },
        [],
    );

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={screenStyles.container} contentContainerStyle={{paddingBottom:100}}>
            <RowWrapper>
                <View style={{width: '70%'}}>
                    <Text style={typography.h1}>
                        Good evening!
                    </Text>
                    <Text style={[typography.h2, {marginTop: 7}]}>
                        Hardline Scott
                    </Text>
                </View>
                <View style={{backgroundColor: colors.lightPink, borderRadius: 20}}>
                    <ProPic/>
                </View>
            </RowWrapper>

            <RowWrapper>
                <View style={{width: '80%', flexDirection: 'row', alignItems: 'center',marginTop:-10}}>
                    <TextInput
                        style={formStyles.input}
                        onChangeText={setSearch}
                        placeholder={'Search'}
                        value={search}
                    />
                    <TouchableOpacity activeOpacity={0.7} style={{
                        marginLeft: -50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        backgroundColor: colors.primary,
                        borderRadius: 10
                    }}>

                        <SearchIcon/>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity activeOpacity={0.5}
                                  style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                    <FilterIcon/>
                </TouchableOpacity>
            </RowWrapper>

            <RowWrapper>
                <View style={{width: '70%'}}>
                    <Text style={typography.h3}>
                        Popular Teachers
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5}
                                  style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                <PipeIcon/>
                </TouchableOpacity>
            </RowWrapper>


            <FlashList
                data={teachers}
                keyboardDismissMode="on-drag" // Automatically dismiss keyboard on scroll
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={{paddingVertical:10}}
                renderItem={renderTeachers}
                keyExtractor={item => 'Teachers-' + item.name}
                horizontal
                estimatedItemSize={100}
                showsHorizontalScrollIndicator={false}
            />

            <RowWrapper>
                <View style={{width: '70%'}}>
                    <Text style={typography.h3}>
                        Popular Institutions
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5}
                                  style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                    <PipeIcon/>
                </TouchableOpacity>
            </RowWrapper>

            <FlashList
                data={institutions}
                keyboardDismissMode="on-drag" // Automatically dismiss keyboard on scroll
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={{paddingVertical:10}}
                renderItem={renderInstitution}
                estimatedItemSize={width-20}
                keyExtractor={item => 'Institutions-' + item.name}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
}


