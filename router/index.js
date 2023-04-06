import React from "react";
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native-paper';
import { Login, Main } from "../screens";

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const Logged = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Login" component={Login}
//                 options={{ headerShown: false }} />
//             <Tab.Screen name="Main"
//                 options={{ headerShown: false }} >
//                 {(props) => <Main {...props} extraData={propsTheme} />}
//             </Tab.Screen>
//         </Tab.Navigator>
//     );
// }

function EmptyScreen() {
    return <View />;
}

function Home({ propsTheme }) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main"
                options={{ headerShown: false }}
            >
                {(props) => <Main {...props} extraData={propsTheme} />}
            </Tab.Screen>
            <Tab.Screen name="Settings" component={EmptyScreen} />
        </Tab.Navigator>
    );
}

const Router = ({ propsTheme }) => {
    return (
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
                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                >
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
    )
}

export default Router
