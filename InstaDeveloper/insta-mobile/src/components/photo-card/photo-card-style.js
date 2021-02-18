import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const widthScreen = Dimensions.get('screen').width;

const photoCardStyle = StyleSheet.create({
    photo: {
        width: widthScreen,
        height: widthScreen,
    },
    constainerTxt: {
        margin: 10
    },
    text: {
        marginBottom: 10
    },
    containerLikes: {
        flexDirection: 'row',
        alignItems:'center'
    },
    like: {
        width: 25,
        height: 25,
        marginRight:10,
    },
});

export default photoCardStyle;
