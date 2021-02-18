import React from 'react';
import { View, StyleSheet } from 'react-native';
import Frame from './Frame';

const FlexBox = () => {
    return (
        <View style={style.flex01}>
            <Frame color="#ff801a"></Frame>
            <Frame color="#50d1f6"></Frame>
            <Frame color="#dd22c1"></Frame>
            <Frame color="#8312ed"></Frame>
            <Frame color="#36c9a7"></Frame>
        </View>
    );
}

const style = StyleSheet.create({
    flex01:{
        alignItems:'flex-end',
        justifyContent:'space-around',
        backgroundColor:'#000'
    }
})

export default FlexBox;
