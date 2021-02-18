import React from 'react';
import { View } from 'react-native';

const Frame = (props) => {

    const size = 50;
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor: props.color || '#090'
        }}>
        </View>
    );
}

export default Frame;
