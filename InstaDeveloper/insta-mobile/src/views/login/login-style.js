import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

const styleLogin = StyleSheet.create({
    container: {
        flexGrow: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
    },
    inputs: {
        width: width * .8,
        padding: 5,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 25
    },
    containerBtn: {
        flexGrow: 2,
        marginBottom: 50,
    },
    msgError:{
        color:'red'
    }
});

export default styleLogin;
