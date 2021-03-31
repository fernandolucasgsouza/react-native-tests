import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from './../screens/Login/LoginScreen';

const mainRoutes = [
    {
        name: 'Welcome',
        component: WelcomeScreen,
        options: { title: 'Bem vindo' },
    },
    {
        name: 'Login',
        component: LoginScreen,
        options: { title: 'Entrar' },
    },
];

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {mainRoutes.map((route, i) => {
                    return (
                        <Stack.Screen
                            key={`${i}`}
                            name={route.name}
                            component={route.component}
                            options={route.options}
                        ></Stack.Screen>
                    );
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MainStackNavigator;
