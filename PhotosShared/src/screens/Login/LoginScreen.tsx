import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundLogin } from '../../common/images/images-source';
import InputAuth from '../../components/InputAuth/InputAuth';
import styles from './styles';

const initialState = {
    name: '',
    email: 'fernando@dev.com',
    password: '123456',
    confirmPassword: '',
    stageNew: false,
};

const LoginScreen = (props: any) => {
    const [auth, setAuth] = useState(initialState);
    const [validForm, setValidForm] = useState<string | boolean>(false);

    useEffect(() => {
        validateForm();
    }, [auth]);

    const signinOrSigup = () => {
        if (auth.stageNew) signup();
        else signin();
    };

    const signup = async () => {};

    const signin = async () => {
        try {
            // TODO: descomentar quando implementar back-end
            // const response = await axios.post(`${server}/signin`, {
            //     email: auth.email,
            //     password: auth.password,
            // });

            // axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
            props.navigation.navigate('Home');
        } catch (error) {
            console.log(error);
        }
    };

    const validateForm = () => {
        const validations = [];

        validations.push(auth.email && auth.email.includes('@'));
        validations.push(auth.password && auth.password.length >= 6);

        if (auth.stageNew) {
            validations.push(auth.confirmPassword === auth.password);
            validations.push(auth.name.length >= 3);
        }

        const isvalid = validations.reduce(
            (total, current) => total && current
        );

        setValidForm(isvalid);
    };

    return (
        <ImageBackground source={BackgroundLogin} style={styles.container}>
            <Text style={styles.title}>Photos Shared</Text>

            <View style={styles.containerForm}>
                <Text style={styles.description}>
                    Nona Igreja Presbiteriana
                </Text>
                <Text style={styles.subtitle}>
                    {auth.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                </Text>

                {auth.stageNew && (
                    <InputAuth
                        style={styles.input}
                        icon="user"
                        placeholder="Nome"
                        value={auth.name}
                        onChangeText={(name: string) =>
                            setAuth({ ...auth, name })
                        }
                    />
                )}

                <InputAuth
                    style={styles.input}
                    icon="at"
                    placeholder="E-mail"
                    value={auth.email}
                    onChangeText={(email: string) =>
                        setAuth({ ...auth, email })
                    }
                />

                <InputAuth
                    style={styles.input}
                    icon="lock"
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={auth.password}
                    onChangeText={(password: string) =>
                        setAuth({ ...auth, password })
                    }
                />

                {auth.stageNew && (
                    <InputAuth
                        style={styles.input}
                        icon="lock"
                        placeholder="Confimar Senha"
                        secureTextEntry={true}
                        value={auth.confirmPassword}
                        onChangeText={(confirmPassword: string) =>
                            setAuth({ ...auth, confirmPassword })
                        }
                    />
                )}

                <TouchableOpacity onPress={signinOrSigup} disabled={!validForm}>
                    <View
                        style={[
                            styles.btn,
                            validForm ? styles.btnEnable : styles.btnDisabled,
                        ]}
                    >
                        <Text style={styles.btnText}>
                            {auth.stageNew ? 'Registrar' : 'Entrar'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => setAuth({ ...auth, stageNew: !auth.stageNew })}
            >
                <View style={{ padding: 10 }}>
                    <Text style={styles.btnText}>
                        {auth.stageNew
                            ? 'Já possui conta?'
                            : 'Ainda não possui conta?'}
                    </Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default LoginScreen;
