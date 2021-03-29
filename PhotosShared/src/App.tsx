import { decode, encode } from 'base-64';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import WelcomeScreen from './screens/WelcomeScreen';
import storeConfig from './store/store-config';
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const store = storeConfig();

    if (!global.btoa) global.btoa = encode;
    if (!global.atob) global.atob = decode;
    console.log('App');

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <WelcomeScreen />
                    {/* <Navigation colorScheme={colorScheme} /> */}
                </Provider>
                <StatusBar />
            </SafeAreaProvider>
        );
    }
}
