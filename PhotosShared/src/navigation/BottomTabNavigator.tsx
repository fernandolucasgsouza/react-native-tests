import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabCameraScreen from '../screens/TabCameraScreen';
import TabGalleryScreen from '../screens/TabGalleryScreen';
import TabOneScreen from '../screens/TabOneScreen';

const BottomTab = createBottomTabNavigator();

const RoutesUnAuthorize = createCompatNavigatorFactory(createStackNavigator)(
    {
        Auth: { screen: TabOneScreen },
        TabGalleryScreen: { screen: TabGalleryScreen },
    },
    {
        initialRouteName: 'TabGalleryScreen',
    }
);

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="TabGalleryScreen"
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
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={32} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabGallery"
                component={RoutesUnAuthorize}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="md-checkmark-circle"
                            size={32}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}
