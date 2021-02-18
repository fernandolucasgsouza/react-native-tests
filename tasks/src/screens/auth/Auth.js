import React, { Component } from 'react';
import { Alert, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import styles from "./auth.styles";
import image from "../../../assets/imgs/login.jpg";
import { TextInput } from 'react-native-gesture-handler';

export default class extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    };

    signinOrSigup = () => {
        if (this.state.stageNew) Alert.alert('Sucesso!', 'Criar conta')
        else Alert.alert('Sucesso!', 'Logar')
    }

    render() {

        return (

            <ImageBackground source={image} style={styles.container}>
                <Text style={styles.title}>Tasks</Text>

                <View style={styles.containerForm}>

                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                    </Text>

                    {this.state.stageNew &&
                        <TextInput style={styles.input}
                            placeholder='Nome'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })} />
                    }

                    <TextInput style={styles.input}
                        placeholder='E-mail'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />

                    <TextInput style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />

                    {this.state.stageNew &&

                        <TextInput style={styles.input}
                            placeholder='Confimar Senha'
                            secureTextEntry={true}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }

                    <TouchableOpacity onPress={this.signinOrSigup}>
                        <View style={styles.btn}>
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

