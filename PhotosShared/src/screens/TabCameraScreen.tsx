import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CameraSvg } from '../common/Icons/icons';

export default function TabCameraScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Camera</Text>
            <CameraSvg fill="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
