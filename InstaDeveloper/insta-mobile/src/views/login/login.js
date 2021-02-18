import React, { Fragment, useState } from 'react';

import {
    View,
    TextInput,
    Text,
    Button,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import loggerService from '../../services/login-service';
import styleLogin from './login-style';

const Login = ({ navigation }) => {

    const [userState, setUserState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [errorMessageState, setErrorMessageState] = useState('');

    const logger = async () => {
        setErrorMessageState('');
        try {
            
            const token = await loggerService(userState, passwordState);

            await AsyncStorage.setItem('insta_developer_token', `${token}`);

            navigation.replace('Feed', { userName: userState });

        } catch (error) {
            setErrorMessageState(error.message);
        }
    }

    return (

        <Fragment>
            <View style={styleLogin.container}>

                <TextInput
                    style={styleLogin.inputs}
                    placeholder={'Usuário'}
                    onChangeText={text => setUserState(text)}
                />

                <TextInput
                    style={styleLogin.inputs}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    onChangeText={text => setPasswordState(text)}
                />
                <Text style={styleLogin.msgError}>{errorMessageState}</Text>
            </View>

            <View style={styleLogin.containerBtn}>
                <Button
                    title='Entrar'
                    onPress={logger}
                />
            </View>

        </Fragment>

    );
};

Login.navigationOptions = () => {
    const options = {
        title: 'Login'
    }

    if (Platform.OS == 'android') options.header = null;

    return options;
}
export default Login;
