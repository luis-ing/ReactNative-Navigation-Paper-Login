import React, { useState } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { themeDark, themeLigth } from './theme';
import { name as appName } from './app.json';
import AuthContextProvider from './context/AuthContext';
import Router from './router';

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
        <Router propsTheme={propsTheme} />
      </PaperProvider>
    </AuthContextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

export default App;