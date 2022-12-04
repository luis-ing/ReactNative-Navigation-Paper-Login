import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthSesion = async () => {
    try {
        // await AsyncStorage.setItem('@session', 'false');
        const sesion = await AsyncStorage.getItem('@session');
        if (sesion == null) {
            await AsyncStorage.setItem('@session', false);
        }

        // const ActualSession = await AsyncStorage.getItem('@session');
        // console.log("ActualSession ", ActualSession);
        // return ActualSession != null ? ActualSession : null;
        return sesion;
    } catch (e) {
        console.log("error: ", e);
    }
}

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [Auth, setAuth] = useState();
    // useEffect(() => {
    //     const initSesion = async () => {
    //         setAuth(Boolean(await AuthSesion()));
    //         console.log("useEffect ejecutado: ", Boolean(await AuthSesion()), Auth)
    //     }
    //     initSesion();
    // }, []);

    const AutomaticAuth = async (navigation, StackActions) => {
        const data = Boolean(await AuthSesion());
        console.log("Sesion de storage ", data, typeof data);

        if (data) {
            console.log("Redireccionamiento a Main");
            navigation.dispatch(
                StackActions.replace('Main')
            );
        }
    }

    const startClosesesion = async (navigation, StackActions, sesion) => {
        // console.log("Sesion antes de cambiar: ", Auth, typeof Auth)
        if (sesion == "LOGIN") {
            setAuth(true);
            // await AsyncStorage.setItem('@session:key', 'true');
            await AsyncStorage.setItem('@session', 'true');
        } else {
            setAuth(false);
            // await AsyncStorage.setItem('@session:key', 'false');
            await AsyncStorage.setItem('@session', 'false');
        }

        if (sesion == "LOGIN") {
            navigation.dispatch(
                StackActions.replace('Main')
            );
        } else {
            navigation.dispatch(
                StackActions.replace('Login')
            );
        }
    }
    console.log("Sesion depues de cambiar: ", Auth, typeof Auth)

    const data = { Auth, AutomaticAuth, startClosesesion };
    return (<AuthContext.Provider value={data}>{children}</AuthContext.Provider>);
}

export { AuthContext };
export default AuthContextProvider;