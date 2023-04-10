import React, { useRef } from "react";
import { Platform, StatusBar, Animated, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { HomeIcon, PersonFillIcon } from '@primer/octicons-react';

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
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer independent={true}>

      <Tab.Navigator
        // shadowOpacity="0.02"
        // shadowOffset="0.08"
        // shadowColor="#000"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            // paddingLeft: 20,
            // paddingRight: 20,
            bottom: 15,
            marginHorizontal: 0,

            height: 80,
            borderRadius: 30,

            borderTopColor: '#fff',

            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 30,
            elevation: 1,

            paddingTop: Platform.OS === 'ios' ? 25 : 0,
            paddingBottom: Platform.OS === 'ios' ? 20 : 0
          },
        }}
      >
        <Tab.Screen
          name="Main"
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'newspaper-variant' : 'newspaper-variant-outline'}
                color={focused ? '#000' : '#7f7f7f'}
                size={25}
              // style={{ paddingTop: Platform.OS === 'ios' ? 25 : 0 }}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={'podcast'}
                color={focused ? '#000' : '#7f7f7f'}
                size={25}
              // style={{ paddingTop: Platform.OS === 'ios' ? 25 : 0 }}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
        {/* Icono medio */}
        <Tab.Screen
          name="Apps"
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={'blur'}
                color={focused ? '#000' : '#7f7f7f'}
                size={35}
              // style={{
              // paddingTop: Platform.OS === 'ios' ? 20 : 0,
              // paddingBottom: 60,
              // borderColor: '#000',
              // borderRadius: 10,
              // backgroundColor: '#ffa'
              // }}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true
              }).start();
            }
          })}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
        <Tab.Screen
          name="Notify"
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={'text-account'}
                color={focused ? '#000' : "#7f7f7f"}
                size={25}
              // style={{ paddingTop: Platform.OS === 'ios' ? 25 : 0 }}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          })}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
        <Tab.Screen
          name="Users"
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                color={focused ? '#000' : "#7f7f7f"}
                size={25}
              // style={{ paddingTop: Platform.OS === 'ios' ? 25 : 0 }}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}
        >
          {(props) => <Main {...props} extraData={propsTheme} />}
        </Tab.Screen>
      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() / 5 + (20 / 5),
        height: 5,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 15,
        // Horizontal Padding = 20...
        left: (getWidth() / 5) + (20 / 5),
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>


  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  // console.log('width', width);

  // Horizontal Padding = 20...
  // width = (width / 3) * 2;

  // Total five Tabs...
  return width / 5;
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
