import { StyleSheet } from 'react-native';
import commonStyles from '../../common/common.styles';

const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10

    },
    containerForm: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        backgroundColor: commonStyles.colors.secondary,
        marginTop: 10,
    },
    btn: {
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius:8
    },
    btnText: {
        color: commonStyles.colors.secondary,
        fontSize: 20
    },
    btnEnable:{
        backgroundColor:'#080'
    },
    btnDisabled:{
        backgroundColor:'#AAA'
    }
});

export default AuthStyles;
