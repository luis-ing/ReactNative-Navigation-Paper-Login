import React from "react";
import { Platform, StatusBar } from "react-native";
import { useTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native-paper";
import { Login, Main } from "../screens";

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <View>
      <Text>Hooola</Text>
    </View>
  );
};

function Home({ propsTheme }) {
  return (
    <>
      <Tab.Navigator
        shadowOpacity="0"
        shadowOffset="0"
        shadowColor="#000"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,

            height: 60,
            borderRadius: 10,

            //   shadowColor: "#000",
            //   shadowOpacity: 0.06,
            //   shadowOffset: {
            //     width: 10,
            //     height: 10,
            //   },
            shadowOpacity: 0,
          },
        }}
      >
        <Tab.Screen
          name="Main"
          options={{
            tabBarShowLabel: false,
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? color : "#000"}
                size={20}
              />
            ),
          }}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          options={{
            tabBarShowLabel: false,
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? color : "#000"}
                size={20}
              />
            ),
          }}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
        <Tab.Screen
          name="Notify"
          options={{
            tabBarShowLabel: false,
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? color : "#000"}
                size={20}
              />
            ),
          }}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
      </Tab.Navigator>

      {/* <View
        style={{
          with: 100,
          height: 100,
          backgroundColor: "red",
          position: "absolute",
          bottom: 99,
        }}
      ></View> */}
    </>
  );
}

const Router = ({ propsTheme, DarkTheme }) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={DarkTheme ? "light-content" : "dark-content"}
        showHideTransition="slide"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                /> */}
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Home {...props} propsTheme={propsTheme} />}
          </Stack.Screen>
          {/* <Stack.Screen
                    name="Main"
                    options={{ headerShown: false }}
                >
                    {(props) => <Main {...props} extraData={propsTheme} />}
                </Stack.Screen> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
