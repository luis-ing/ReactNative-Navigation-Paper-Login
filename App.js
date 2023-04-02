import React, { useState } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { themeDark, themeLigth } from './theme';
import { name as appName } from './app.json';
import AuthContextProvider from './context/AuthContext';
import Login from './screens/Login/Login';
import Main from './screens/Home/Main';

const Stack = createNativeStackNavigator();

const StatusBarProp = () => {

}

const App = () => {
  const theme = useTheme();
  const [DarkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  }
  const propsTheme = { DarkTheme, changeTheme };

  return (
    <AuthContextProvider>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={DarkTheme ? "light-content" : "dark-content"}
        showHideTransition="slide"
      />
      <PaperProvider theme={DarkTheme ? themeDark : themeLigth}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              // component={Main}
              options={{ headerShown: false }}
            >
              {(props) => <Main {...props} extraData={propsTheme} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer >
      </PaperProvider>
    </AuthContextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

export default App;