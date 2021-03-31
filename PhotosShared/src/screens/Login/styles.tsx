import { StyleSheet } from 'react-native';
import commonStyles from '../../common/styles/common-styles';
import { ColorsType } from '../../common/styles/enums/colors-types';

const Styles = StyleSheet.create({
    ...commonStyles,
    containerForm: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    description: {
        ...commonStyles.subtitle,
        fontSize: 24,
        textAlign: 'center',
        color: ColorsType.textPrimary,
    },

    btn: {
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    btnText: {
        color: ColorsType.primary,
        fontSize: 20,
    },
});

export default Styles;
