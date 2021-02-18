import React from 'react';
import { View, Button, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('screen');

const ContadorButton = ({ increment, decrement }) => {

    return (
        <View style={style.container}>
            
            <TouchableOpacity
                onPress={decrement}
                style={[style.btn, style.decr]}>

                <Text style={[style.text]}>-</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={increment}
                style={[style.btn, style.incr]}>

                <Text style={[style.text]}>+</Text>

            </TouchableOpacity>
            
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    btn: {
        width: width * .5,
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    incr: {
        fontSize: 30,
        backgroundColor: '#009EFA',
    },
    decr: {
        backgroundColor: '#CD3F2C',
    },
    text: {
        fontSize: 25,
        color: '#FFF',

    }
})


export default ContadorButton;
