import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
    NativeModules,
    Text,
    Pressable,
    StyleSheet,
    Platform,
} from "react-native";

import ClassWorkTab from "../assets/classWorkTab.svg";
import ClassWorkTabDisable from "../assets/classWorkTabDisable.svg";
import ExploreTab from "../assets/exploreTab.svg";
import ExploreTabDisable from "../assets/exploreTabDisable.svg";
import StreamTab from "../assets/streamTab.svg";
import StreamTabDisable from "../assets/streamTabDisable.svg";
import { ClassWork } from "../screens/tabs/ClassWork";
import { Explore } from "../screens/tabs/Explore";
import { Stream } from "../screens/tabs/Stream";
import { colors } from "../theme/colors";

type TabProps = {
    name: string;
    component: React.ComponentType<any>;
    options: {
        title: string;
        tabBarIcon: (props: { focused: boolean; color: string }) => React.JSX.Element;
        tabBarLabel: (props: { focused: boolean }) => React.JSX.Element;
        tabBarLabelPosition?: "below-icon";
        headerRight?: (props: any) => React.JSX.Element;
    };
};

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) =>
                        focused ? <ExploreTab /> : <ExploreTabDisable />,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: focused ? colors.primary : colors.primaryDark },
                            ]}
                        >
                            Explore
                        </Text>
                    ),
                    tabBarLabelPosition: "below-icon",
                    headerRight: (props) => (
                        <Pressable
                            onPress={async () => {
                                await AsyncStorage.setItem("user", "");
                                if (Platform.OS === "web") {
                                    location.reload();
                                } else {
                                    NativeModules.DevSettings.reload();
                                }
                            }}
                            style={{ flexDirection: "row", paddingRight: 10 }}
                        >
                            <Ionicons
                                name="log-out-outline"
                                size={30}
                                color={colors.primary}
                            />
                        </Pressable>
                    ),
                }}
            />
            <Tab.Screen
                name="Stream"
                component={Stream}
                options={{
                    title: "Stream",
                    tabBarIcon: ({ focused, color }) =>
                        focused ? <StreamTab /> : <StreamTabDisable />,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: focused ? colors.primary : colors.primaryDark },
                            ]}
                        >
                            Stream
                        </Text>
                    ),
                    tabBarLabelPosition: "below-icon",
                }}
            />
            <Tab.Screen
                name="ClassWork"
                component={ClassWork}
                options={{
                    title: "ClassWork",
                    tabBarIcon: ({ focused, color }) =>
                        focused ? <ClassWorkTab /> : <ClassWorkTabDisable />,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: focused ? colors.primary : colors.primaryDark },
                            ]}
                        >
                            ClassWork
                        </Text>
                    ),
                    tabBarLabelPosition: "below-icon",
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createNativeStackNavigator();

export function DashboardRoutes(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen
                name="MyTabs"
                component={MyTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 12,
        marginBottom: Platform.OS === "web" ? 3 : 0,
    },
});
