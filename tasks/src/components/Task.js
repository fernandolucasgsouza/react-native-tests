import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableWithoutFeedback, } from 'react-native';

import commonStyles from "../common/common.styles";

const Task = props => {

    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {};
    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const dateFormatted = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

    return (
        <TouchableWithoutFeedback  onPress={() => props.toogleTask(props.id)}>
            <View style={[styles.container]} >
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>

                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{dateFormatted}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={[styles.ckeck, styles.done]}>
                <Icon name='check' size={20} style={styles.icon}></Icon>
            </View>
        );
    } else {
        return (
            <View style={[styles.ckeck, styles.pending]}></View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ckeck: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#555',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
    },
    done: {
        backgroundColor: '#4D7031'
    },
    icon: {
        color: commonStyles.colors.secondary
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
    }
});
export default Task;
