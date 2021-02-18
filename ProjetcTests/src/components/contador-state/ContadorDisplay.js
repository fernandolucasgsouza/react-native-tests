import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ContadorDisplay = ({num}) => {

    return (
        <View style={style.display}>
            <Text style={style.displayText}>{num}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    display:{
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
    },
    displayText:{
        fontSize:20,
        textAlign: 'center' ,
        color:'#fff',
    }
});

export default ContadorDisplay;
