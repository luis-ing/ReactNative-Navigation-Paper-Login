import React, { useContext } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { useTheme, Button, Switch, Card, Title, Paragraph, Appbar, Avatar, Text, SegmentedButtons } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import listContainer from './content/list.container';

const Main = ({ navigation, extraData: { DarkTheme, changeTheme } }) => {
    const theme = useTheme();
    const RespondAuthContext = useContext(AuthContext);

    const Logout = () => {
        RespondAuthContext.startClosesesion(navigation, StackActions, "Main");
    }

    const onToggleSwitch = () => {
        changeTheme();
    }

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, height: '100%', width: '100%' }}>
            <View style={styles.container}>
                {/* <Appbar.Header style={{ backgroundColor: theme.colors.background }} elevated={0} mode="center-aligned">
                    <Avatar.Image size={45} source={require('assets/img_perfil1.jpg')}
                        onTouchEnd={() => console.log('Hooola')} />
                    <Appbar.Content title="Predeterminado" subtitle={'Subtitle'} />
                    <Appbar.Action icon="plus" onPress={() => { }} />
                </Appbar.Header> */}
                {/* <View style={{ alignItems: 'center' }}>
                    <SegmentedButtons
                        buttons={[
                            {
                                value: 'walk',
                                label: 'Dia',
                            },
                            {
                                value: 'train',
                                label: 'Semana',
                            },
                            {
                                value: 'drive',
                                label: 'Mes'
                            },
                            {
                                value: 'anio',
                                label: 'Año'
                            },
                        ]}
                    />
                </View> */}
                <Switch value={DarkTheme} onValueChange={onToggleSwitch} />
                <Button mode="contained" onPress={Logout}>
                    Logout
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
});

export default Main;