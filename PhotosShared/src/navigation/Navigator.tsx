import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CameraSvg, GallerySvg } from '../common/Icons/icons';
import LoginScreen from '../screens/Login/LoginScreen';
import TabCameraScreen from '../screens/TabCameraScreen';
import TabGalleryScreen from '../screens/TabGalleryScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="TabCamera"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <BottomTab.Screen
                name="TabCamera"
                component={TabCameraScreen}
                options={{
                    tabBarIcon: ({ color }) => <CameraSvg />,
                }}
            />
            <BottomTab.Screen
                name="TabGallery"
                component={TabGalleryScreen}
                options={{
                    tabBarIcon: ({ color }) => <GallerySvg />,
                }}
            />
        </BottomTab.Navigator>
    );
};

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
                <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;
