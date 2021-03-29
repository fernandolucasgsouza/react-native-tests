import * as Sharing from 'expo-sharing';
import React, { useRef } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { captureRef } from 'react-native-view-shot';

export default function TabOneScreen(props: any) {
    const encodedBase64 = btoa('hello world');
    let _sharedViewContainer = useRef() as any;

    const openShareDialogAsync = async () => {
        console.log('_sharedViewContainer', _sharedViewContainer);

        if (!(await Sharing.isAvailableAsync())) {
            Alert.alert(
                `Ops, o compartilhamento não está disponível em sua plataforma :'( `
            );
            return;
        }

        captureRef(_sharedViewContainer, {}).then(
            (uri: any) => {
                console.log('Imgem salva!', uri);
                Sharing.shareAsync(uri);
            },
            (error) => {
                Alert.alert('Ops, ocorreu um erro durante compartilhamento');
                console.error(
                    'Ops, ocorreu um erro durante compartilhamento',
                    _sharedViewContainer,
                    error
                );
            }
        );
    };

    return (
        <>
            <View style={styles.container}>
                <View
                    ref={(view) => (_sharedViewContainer = view)}
                    style={{
                        backgroundColor: '#FFF',
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'orange',
                            justifyContent: 'center',
                            width: 300,
                            borderRadius: 8,
                            padding: 50,
                        }}
                    >
                        <Text style={styles.title}>Fernando Souza</Text>
                        <Text style={styles.title}>{encodedBase64}</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    width: '100%',
                    margin: 'auto',
                }}
            >
                <TouchableOpacity
                    onPress={props.navigation.navigate('TabGallery')}
                    style={{
                        width: '100%',
                        marginBottom: 20,
                        padding: 10,
                    }}
                >
                    <Text>Logar</Text>
                </TouchableOpacity>

                <Button onPress={openShareDialogAsync} title="Compartilhar" />
            </View>
        </>
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
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
