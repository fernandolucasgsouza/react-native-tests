import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native';
import headerCardStyle from "./header-card-style";

const HeaderCard = ({ userName, urlUserPhoto }) => {

    return (

        <View style={headerCardStyle.container}>
            <Image
                source={{uri: urlUserPhoto}}
                style={headerCardStyle.photo} />
            <Text>{userName}</Text>
        </View>

    )

}

export default HeaderCard;
