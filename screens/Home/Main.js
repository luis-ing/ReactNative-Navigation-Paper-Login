import React, { useContext } from 'react';
import { StyleSheet, StatusBar, View, TouchableHighlight } from 'react-native';
import { useTheme, Button, Switch, Card, Title, Paragraph } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import listContainer from './content/list.container';

const Main = ({ navigation, extraData }) => {
    const theme = useTheme();
    const { DarkTheme, changeTheme } = extraData;
    const RespondAuthContext = useContext(AuthContext);

    const Logout = () => {
        RespondAuthContext.startClosesesion(navigation, StackActions, "Main");
    }

    const onToggleSwitch = () => {
        changeTheme();
    }

    return (
        <View style={{ backgroundColor: theme.colors.background, height: '100%', width: '100%' }}>
            <View style={styles.container}>
                <Card style={{ marginTop: 15, paddingTop: '10%', paddingBottom: '5%' }} mode="elevated">
                    <Card.Cover style={{ width: 60, height: 60, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2476/2476980.png' }} />
                    <Card.Content>
                        <Title style={{ textAlign: 'center' }}>Start Documentation</Title>
                        <Paragraph style={{ textAlign: 'center' }}>Input or Paste your text!</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{ alignSelf: 'center' }}>
                        <Button
                            mode="contained"
                        >
                            Hola
                        </Button>
                    </Card.Actions>
                </Card>
                <Switch value={DarkTheme} onValueChange={onToggleSwitch} />
                <Button
                    mode="contained"
                    onPress={Logout}
                >
                    Logout
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight <= 30 ? StatusBar.currentHeight + 10 : 70 - 20,
        paddingHorizontal: 15,
    },
});

export default Main;