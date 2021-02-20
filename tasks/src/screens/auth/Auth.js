import axios from 'axios';
import React, { Component } from 'react';
import { Alert, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import styles from "./auth.styles";
import image from "../../../assets/imgs/login.jpg";
import { server, showError, showSuccess } from '../../common/common';

import AuthInput from '../../components/AuthInput';


const initialState = {
    name: '',
    email: 'fernando@dev.com',
    password: '123456',
    confirmPassword: '',
    stageNew: false
}

export default class extends Component {

    state = { ...initialState };

    signinOrSigup = () => {
        if (this.state.stageNew) this.signup();
        else this.signin()
    }

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            })

            showSuccess('Usuário cadastrado!');
            this.setState({ ...initialState });

        } catch (error) {
            showError(error);
        }
    }

    signin = async () => {
        try {
            // TODO: descomentar quando implementar back-end
            // const response = await axios.post(`${server}/signin`, {
            //     email: this.state.email,
            //     password: this.state.password,
            // });

            // axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
            this.props.navigation.navigate('Home');

        } catch (error) {
            showError(error);
        }
    }

    render() {

        const validations = [];

        validations.push(this.state.email && this.state.email.includes('@'));
        validations.push(this.state.password && this.state.password.length >= 6);

        if (this.state.stageNew) {
            validations.push(this.state.confirmPassword === this.state.password);
            validations.push(this.state.name === this.state.name >= 3);
        }

        const validForm = validations.reduce((total, current) => total && current);

        return (

            <ImageBackground source={image} style={styles.container}>
                <Text style={styles.title}>Tasks</Text>

                <View style={styles.containerForm}>

                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                    </Text>

                    {this.state.stageNew &&
                        <AuthInput style={styles.input}
                            icon='user'
                            placeholder='Nome'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })} />
                    }


                    <AuthInput style={styles.input}
                        icon='at'
                        placeholder='E-mail'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />

                    <AuthInput style={styles.input}
                        icon='lock'
                        placeholder='Senha'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />

                    {this.state.stageNew &&

                        <AuthInput style={styles.input}
                            icon='lock'
                            placeholder='Confimar Senha'
                            secureTextEntry={true}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }

                    <TouchableOpacity onPress={this.signinOrSigup} disabled={!validForm}>
                        <View style={[styles.btn, validForm ? styles.btnEnable : styles.btnDisabled]}>
                            <Text style={styles.btnText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.btnText}>
                            {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                        </Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground>

        );
    }
}

