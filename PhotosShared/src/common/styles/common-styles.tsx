import { StyleSheet } from 'react-native';
import { ColorsType } from './enums/colors-types';
import { FontFamilyTypes, FontSizeTypes } from './enums/fonts-types';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: FontFamilyTypes.default,
        color: 'rgba(255,255,255,.8)',
        fontSize: 50,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: FontFamilyTypes.default,
        color: ColorsType.textPrimary,
        fontSize: FontSizeTypes.fontBaseLarge,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        backgroundColor: ColorsType.primary,
        marginTop: 10,
    },
    btn: {
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    btnEnable: {
        backgroundColor: '#080',
    },
    btnDisabled: {
        backgroundColor: '#AAA',
    },
});

export default commonStyles;
