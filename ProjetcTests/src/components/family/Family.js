import React from 'react';
import { Text, View } from 'react-native';

const Family = (props) => {
    return (
        <View style={{
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor:'#090'
        }}>
            <Text style={{ marginTop: 20, textAlign: 'center' }}>Membros da familia</Text>
            {props.children}
        </View>
    );
}

export default Family;
