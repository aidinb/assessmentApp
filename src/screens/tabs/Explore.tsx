import React, { useState } from 'react';
import {
    Dimensions,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet,
    Easing
} from 'react-native';
import { formStyles, typography } from '../../theme/globalStyles';
import { colors } from '../../theme/colors';
import ProPic from '../../assets/proPic.svg';
import PipeIcon from '../../assets/pipeIcon.svg';
import PipeOn from '../../assets/pipeOn.svg';
import FilterIcon from '../../assets/filterIcon.svg';
import SearchIcon from '../../assets/searchIcon';
import { FlashList } from '@shopify/flash-list';
import RenderInstitution from '../../components/RenderInstitution';
import RenderTeachers from '../../components/RenderTeachers';
import { areas, institutions, subjects, teachers } from '../../utils/data';
import RenderFilter from '../../components/RenderFilter';
import type {EasingFunction} from 'react-native';

const { width } = Dimensions.get('window');


export function Explore(): JSX.Element {
    const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [teacherFilter, setTeacherFilter] = useState(false);
    const [institutionsFilter, setInstitutionsFilter] = useState(false);
    const [areaFilter, setAreaFilter] = useState('');
    const [areaInstitutionsFilter, setAreaInstitutionsFilter] = useState('');
    const [subjectFilter, setSubjectFilter] = useState('');
    const [opacity, setOpacity] = useState(new Animated.Value(1));

    const renderTeachers = React.useCallback(
        ({ item }: { item: any }) => {
            return <RenderTeachers item={item} onPress={() => alert(`${item.name} Press!`)} />;
        },
        []
    );

    const renderInstitution = React.useCallback(
        ({ item }: { item: any }) => {
            return <RenderInstitution item={item} onPress={() => alert(`${item.name} Press!`)} />;
        },
        []
    );

    const renderEmptyContainer = () => {
        return (
            <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={typography.h4}>No Result.</Text>
            </View>
        );
    };

    const fadeOutHeader = (easing: EasingFunction) => {
        opacity.setValue(1);
        Animated.timing(opacity, {
            toValue: 0,
            duration: 600,
            easing,
            useNativeDriver:false
        }).start();
    };

    const fadeInHeader = (easing: EasingFunction) => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            easing,
            useNativeDriver:false
        }).start();
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 110],
    });

    const onChangeText = (text)=>{
        setSearch(text);
        if (text === '' && opacity.__getValue() === 0) {
            fadeInHeader(Easing.exp)
            setSearchQuery('')
        }
    }

    const pressSearch = () =>{
        if(search !== '' && opacity.__getValue() === 1){
            setSearchQuery(search)
            fadeOutHeader(Easing.exp)
        }
    }
    return (
        <Animated.ScrollView
            keyboardDismissMode="on-drag"
                             keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false} style={styles.container}
                             contentContainerStyle={{paddingBottom: 100}}>
                <Animated.View style={[styles.rowContainer,{opacity:opacity,height:size,paddingBottom: 0}]}>
                    <View style={styles.userInfoContainer}>
                        <Text style={typography.h1}>Good evening!</Text>
                        <Text style={[typography.h2, {marginTop: 7}]}>Hardline Scott</Text>
                    </View>
                    <View style={styles.profilePicContainer}>
                        <ProPic/>
                    </View>
                </Animated.View>

            <View style={styles.rowContainer}>
                <View style={{width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: -10}}>

                    <TextInput
                        style={formStyles.input}
                        onChangeText={(text) => onChangeText(text)}
                        placeholder={'Search'}
                        value={search}
                    />

                    <TouchableOpacity
                        onPress={pressSearch}
                        activeOpacity={0.7}
                        style={styles.searchButtonContainer}
                    >
                        <SearchIcon/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.5}
                                  style={styles.filterIconContainer}>
                    <FilterIcon/>
                </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
                <Text style={typography.h3}>Popular Teachers</Text>
                <TouchableOpacity
                    onPress={() => {
                        setTeacherFilter(!teacherFilter);
                    }}
                    activeOpacity={0.5}
                    style={styles.filterIconContainer}
                >
                    {teacherFilter ? <PipeOn/> : <PipeIcon/>}
                </TouchableOpacity>
            </View>

            {teacherFilter ? (
                <View>
                    <RenderFilter onPress={(item) => setAreaFilter(item)} selected={areaFilter} title="Area"
                                  items={areas}/>
                    <RenderFilter onPress={(item) => setSubjectFilter(item)} selected={subjectFilter} title="Subject"
                                  items={subjects}/>
                </View>
            ) : null}

            <FlashList
                data={searchQuery !== '' ? teachers.filter((teacher) => teacher.name.toLowerCase().includes(searchQuery.toLowerCase())) : teachers}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={styles.flashListContainer}
                renderItem={renderTeachers}
                keyExtractor={(item) => 'Teachers-' + item.name}
                horizontal
                estimatedItemSize={142}
                estimatedListSize={{ height: 176, width: 126 }}

                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={renderEmptyContainer}
            />

            <View style={styles.rowContainer}>
                <Text style={typography.h3}>Popular Institutions</Text>
                <TouchableOpacity
                    onPress={() => {
                        setInstitutionsFilter(!institutionsFilter);
                    }}
                    activeOpacity={0.5}
                    style={styles.filterIconContainer}
                >
                    {institutionsFilter ? <PipeOn/> : <PipeIcon/>}
                </TouchableOpacity>
            </View>

            {institutionsFilter ? (
                <View>
                    <RenderFilter
                        onPress={(item) => setAreaInstitutionsFilter(item)}
                        selected={areaInstitutionsFilter}
                        title="Area"
                        items={areas}
                    />
                </View>
            ) : null}

            <FlashList
                data={searchQuery !== '' ? institutions.filter((institution) => institution.name.toLowerCase().includes(searchQuery.toLowerCase())) : institutions}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={'handled'}
                renderItem={renderInstitution}
                estimatedItemSize={184}
                estimatedListSize={{ height: 184, width: width-40 }}
                keyExtractor={(item) => 'Institutions-' + item.name}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmptyContainer}
            />

        </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        padding: 20,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfoContainer: {
        width: '80%',
    },
    profilePicContainer: {
        backgroundColor: colors.lightPink,
        borderRadius: 20,
    },

    searchButtonContainer: {
        marginLeft: -50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        backgroundColor: colors.primary,
        borderRadius: 10,
    },

    filterIconContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flashListContainer: {
        paddingVertical: 10,
    },
});
