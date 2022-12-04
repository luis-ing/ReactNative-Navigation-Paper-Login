import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, StatusBar, View } from 'react-native';
import { Text, TextInput, Button, useTheme, withTheme, List } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';


const Login = ({ navigation }) => {
    const theme = useTheme();
    const RespondAuthContext = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(true);
    const [textLogin, setTextLogin] = useState({ 'title': 'LOGIN', 'is_active': true })
    const { control, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        RespondAuthContext.AutomaticAuth(navigation, StackActions);
    }, []);

    const submitShow = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = ({ password, username }) => {
        setTextLogin({ 'title': 'Wait...', 'is_active': false });
        try {
            if (password && username) {
                setTimeout(() => {
                    RespondAuthContext.startClosesesion(navigation, StackActions, "LOGIN");
                    setTextLogin({ 'title': 'LOGIN', 'is_active': true });
                }, 200);
            } else {
                setTextLogin(textLogin.title = 'LOGIN', textLogin.is_active = true);
            }
        } catch (e) {
            console.log("Error: ", e);
        }
    };
    // console.log(errors)
    return (
        <View style={{ backgroundColor: theme.colors.background, height: '100%', width: '100%' }}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <List.Image variant="image" source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' }} />
                    <Text variant="labelLarge" style={{ paddingLeft: 4 }}>Notion</Text>
                </View>
                <View>
                    <Text variant="displaySmall" style={styles.textCenter}>Sign In</Text>
                    <Controller
                        control={control}
                        name="username"
                        rules={{ required: true }}
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <TextInput
                                mode="outlined"
                                label="Username"
                                style={styles.textMargin}
                                error={error ? true : false}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: true }}
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <TextInput
                                mode="outlined"
                                label="Password"
                                secureTextEntry={showPassword}
                                right={<TextInput.Icon icon="eye" onPress={submitShow} />}
                                style={styles.textMargin}
                                error={error ? true : false}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {textLogin.is_active ? (<Button mode="contained" onPress={handleSubmit(onSubmit)}
                        style={styles.buttonMargin}
                    >
                        {textLogin.title}
                    </Button>) : (<Button mode="contained"
                        style={styles.buttonMargin}
                        disabled
                    >
                        {textLogin.title}
                    </Button>)}

                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight <= 30 ? StatusBar.currentHeight + 10 : 70 - 20,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    imgCenter: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    textMargin: {
        marginTop: 10,
        marginBottom: 10
    },
    buttonMargin: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    head: {
        position: 'absolute',
        top: 50,
        left: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default withTheme(Login);