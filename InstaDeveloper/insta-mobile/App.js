
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Feed from './src/views/feed/feed';
import Login from './src/views/login/login';

const navigator = createStackNavigator({
    Login: { screen: Login },
    Feed: { screen: Feed }
});

const AppContainer = createAppContainer(navigator);

const App = () => {
    return (
        <AppContainer />
    );
};

export default App;
