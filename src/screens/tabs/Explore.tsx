import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import { View, Animated, StyleSheet, Easing, Keyboard } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import FilterIcon from "../../assets/filterIcon.svg";
import PipeIcon from "../../assets/pipeIcon.svg";
import PipeOn from "../../assets/pipeOn.svg";
import ProPic from "../../assets/proPic.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import RenderFilter from "../../components/RenderFilter";
import RenderInstitution from "../../components/RenderInstitution";
import RenderTeachers from "../../components/RenderTeachers";
import useFadeAnimation from "../../hooks/useFadeAnimation";
import { colors } from "../../theme/colors";
import { formStyles, typography, useAppTheme } from "../../theme/globalStyles";
import { areas, institutions, subjects, teachers } from "../../utils/data";

// Define the Explore function component
export function Explore() {
  // Initialize state variables using useState

  const numberOfTeacherFilterItems = areas.length + subjects.length;
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [teacherFilter, setTeacherFilter] = useState(false);
  const [institutionsFilter, setInstitutionsFilter] = useState(false);
  const [areaFilter, setAreaFilter] = useState("");
  const [areaInstitutionsFilter, setAreaInstitutionsFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const {
    opacity: opacityHeader,
    size: sizeHeader,
    fadeIn: fadeInHeader,
    fadeOut: fadeOutHeader,
  } = useFadeAnimation(1);
  const {
    opacity: opacityTeacherFilter,
    size: sizeTeacherFilter,
    fadeIn: fadeInTeacherFilter,
    fadeOut: fadeOutTeacherFilter,
  } = useFadeAnimation(0, numberOfTeacherFilterItems * 28);
  const {
    opacity: opacityInstitutionsFilter,
    size: sizeInstitutionsFilter,
    fadeIn: fadeInInstitutionsFilter,
    fadeOut: fadeOutInstitutionsFilter,
  } = useFadeAnimation(0, areas.length * 32);

  // Define a callback function to render teachers
  const renderTeachers = React.useCallback(({ item }: { item: any }) => {
    return (
      <RenderTeachers
        item={item}
        onPress={() => alert(`${item.name} Press!`)}
      />
    );
  }, []);

  // Define a callback function to render institutions
  const renderInstitution = React.useCallback(({ item }: { item: any }) => {
    return (
      <RenderInstitution
        item={item}
        onPress={() => alert(`${item.name} Press!`)}
      />
    );
  }, []);

  // Define a function to render an empty container when there are no search results
  const renderEmptyContainer = () => {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={typography.h4}>No Result.</Text>
      </View>
    );
  };

  // Define a function to handle text input changes
  const onChangeSearch = (text) => {
    setSearch(text);
    // @ts-ignore
    if (text === "" && opacityHeader.__getValue() === 0) {
      fadeInHeader(Easing.exp);
      setSearchQuery("");
    }
  };

  // Define a function to handle the search button press
  const pressSearch = () => {
    Keyboard.dismiss();
    // @ts-ignore
    if (search !== "" && opacityHeader.__getValue() === 1) {
      setSearchQuery(search);
      fadeOutHeader(Easing.exp);
    }
  };

  const theme = useAppTheme();

  return (
    <Animated.ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Animated.View
        style={[
          styles.rowContainer,
          { opacity: opacityHeader, height: sizeHeader, paddingBottom: 0 },
        ]}
      >
        <View style={styles.userInfoContainer}>
          <Text variant="headlineMedium">Good evening!</Text>
          <Text
            variant="titleLarge"
            style={{ marginTop: 7, color: theme.colors.subTitle }}
          >
            Hardline Scott
          </Text>
        </View>
        <View style={styles.profilePicContainer}>
          <ProPic />
        </View>
      </Animated.View>

      <View style={[styles.rowContainer, { zIndex: 1001, paddingTop: 10 }]}>
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TextInput
            style={[formStyles.input, { minWidth: "80%", width: "80%" }]}
            onChangeText={onChangeSearch}
            placeholder="Search"
            underlineColor={theme.colors.transparent}
            activeUnderlineColor={theme.colors.primary}
            value={search}
          />
          <Button
            onPress={pressSearch}
            style={styles.searchButtonContainer}
            icon={() => <SearchIcon />}
          />
        </View>
        <Button
          contentStyle={{ width: 44, height: 44, paddingLeft: 10 }}
          style={styles.filterIconContainer}
          icon={() => <FilterIcon />}
        />
      </View>

      <View style={[styles.rowContainer, { zIndex: 1001 }]}>
        <Text variant="titleLarge">Popular Teachers</Text>
        <Button
          onPress={() => {
            if (teacherFilter) {
              fadeOutTeacherFilter();
            } else {
              fadeInTeacherFilter();
            }
            setTeacherFilter(!teacherFilter);
          }}
          contentStyle={{ width: 44, height: 44, paddingLeft: 10 }}
          style={styles.filterIconContainer}
          icon={() => (teacherFilter ? <PipeOn /> : <PipeIcon />)}
        />
      </View>

      <Animated.View
        style={{
          opacity: opacityTeacherFilter,
          height: sizeTeacherFilter,
          backgroundColor: colors.secondary,
          flexDirection: "column",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <RenderFilter
          onPress={(item) => setAreaFilter(item)}
          selected={areaFilter}
          title="Area"
          items={areas}
        />
        <RenderFilter
          onPress={(item) => setSubjectFilter(item)}
          selected={subjectFilter}
          title="Subject"
          items={subjects}
        />
      </Animated.View>

      <FlashList
        data={
          searchQuery !== ""
            ? teachers.filter((teacher) =>
                teacher.name.toLowerCase().includes(searchQuery.toLowerCase()),
              )
            : teachers
        }
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.flashListContainer}
        renderItem={renderTeachers}
        keyExtractor={(item) => "Teachers-" + item.name}
        horizontal
        estimatedItemSize={142}
        estimatedListSize={{ height: 200, width: 126 }}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={renderEmptyContainer}
      />

      <View style={[styles.rowContainer, { zIndex: 1001 }]}>
        <Text variant="titleLarge">Popular Institutions</Text>
        <Button
          onPress={() => {
            if (institutionsFilter) {
              fadeOutInstitutionsFilter();
            } else {
              fadeInInstitutionsFilter();
            }
            setInstitutionsFilter(!institutionsFilter);
          }}
          contentStyle={{ width: 44, height: 44, paddingLeft: 10 }}
          style={styles.filterIconContainer}
          icon={() => (institutionsFilter ? <PipeOn /> : <PipeIcon />)}
        />
      </View>

      <Animated.View
        style={[
          styles.rowContainer,
          {
            opacity: opacityInstitutionsFilter,
            height: sizeInstitutionsFilter,
            paddingVertical: 0,
            paddingBottom: 10,
          },
        ]}
      >
        <RenderFilter
          onPress={(item) => setAreaInstitutionsFilter(item)}
          selected={areaInstitutionsFilter}
          title="Area"
          items={areas}
        />
      </Animated.View>

      <FlashList
        data={
          searchQuery !== ""
            ? institutions.filter((institution) =>
                institution.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()),
              )
            : institutions
        }
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        renderItem={renderInstitution}
        estimatedItemSize={184}
        estimatedListSize={{ height: 184, width: 300 }}
        keyExtractor={(item) => "Institutions-" + item.name}
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.secondary,
    paddingBottom: 10,
  },
  userInfoContainer: {
    width: "80%",
  },
  profilePicContainer: {
    backgroundColor: colors.lightPink,
    borderRadius: 20,
  },
  searchButtonContainer: {
    marginLeft: -50,
    width: 44,
    minWidth: 44,
    height: 44,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  filterIconContainer: {
    width: 44,
    minWidth: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  flashListContainer: {
    paddingVertical: 10,
    paddingRight: 30,
  },
});
