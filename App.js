import React, { useState } from "react";
import { AppRegistry, Platform, StatusBar } from "react-native";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { themeDark, themeLigth } from "./src/theme";
import { name as appName } from "./app.json";
import AuthContextProvider from "./src/context/AuthContext";
import Router from "./src/router/";

const App = () => {
  const theme = useTheme();
  const [DarkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  };
  const propsTheme = { DarkTheme, changeTheme };

  // console.log(
  //   "Platform.OS ========>",
  //   Platform.OS,
  //   " ",
  //   "rgba(255, 251, 254, 1)" === theme.colors.background,
  //   ' color: ', theme.colors.background
  // );
  return (
    <AuthContextProvider>
      <PaperProvider theme={DarkTheme ? themeDark : themeLigth}>
        <Router propsTheme={propsTheme} DarkTheme={DarkTheme} />
      </PaperProvider>
    </AuthContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);

export default App;
