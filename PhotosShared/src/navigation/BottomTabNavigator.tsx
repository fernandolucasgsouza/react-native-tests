import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabCameraScreen from '../screens/TabCameraScreen';
import TabOneScreen from '../screens/TabOneScreen';

const MenuRoutes = [
    {
        name: 'TabeOne',
        screen: TabOneScreen,
        navigationOptions: {
            title: 'TabeOne',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="camera-retro" size={30} color={tintColor} />
            ),
        },
    },

    {
        name: 'Camera',
        screen: TabCameraScreen,
        navigationOptions: {
            title: 'Camera',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="camera-retro" size={30} color={tintColor} />
            ),
        },
    },
];

const MenuConfig = {
    initialRouteName: 'TabOne',
    tabBarOptions: { showLabel: false },
};

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{ showLabel: false }}
        >
            {MenuRoutes.map((tab) => {
                <BottomTab.Screen
                    name={tab.name}
                    component={tab.screen}
                    options={tab.navigationOptions}
                />;
            })}
        </BottomTab.Navigator>
    );
}

// const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// export default function BottomTabNavigator() {
//     const colorScheme = useColorScheme();

//     return (
//         <BottomTab.Navigator
//             initialRouteName="TabOne"
//             tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
//         >
//             <BottomTab.Screen
//                 name="TabOne"
//                 component={TabOneNavigator}
//                 options={{
//                     tabBarIcon: ({ color }) => (
//                         <TabBarIcon name="ios-code" color={color} />
//                     ),
//                 }}
//             />
//             <BottomTab.Screen
//                 name="TabTwo"
//                 component={TabTwoNavigator}
//                 options={{
//                     tabBarIcon: ({ color }) => (
//                         <TabBarIcon name="ios-code" color={color} />
//                     ),
//                 }}
//             />
//         </BottomTab.Navigator>
//     );
// }
