import React from 'react';
import { Text, View } from 'react-native';
import If from './IfChildren';

const Members = ({ member = {} }) => {
    return (
        <>
            <If test={member.firstName && member.lastName}>

                <View style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'#900'
                }}
                >

                    <Text style={{ fontSize: 20 }}>{member.firstName} {member.lastName}</Text>
                </View>

            </If>
        </>
    );
}

export default Members;
