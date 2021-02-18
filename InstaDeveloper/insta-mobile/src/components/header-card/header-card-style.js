import { StyleSheet } from 'react-native';

const headerCardStyle = StyleSheet.create({
    photo: {
        width: 40,
        height: 40,
        margin:10,
        borderRadius:30,
    },
    container:{
        flexDirection: 'row',
        alignItems:'center'
    }
});

export default headerCardStyle;
