import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

import todayImage from '../../../assets/imgs/today.jpg';
import commonStyles from '../../common/common.styles';

const TaskList = () => {

    const today = moment().locale('pt-br').format('ddd, D [de] MMM');

    return (
        <View style={style.container}>

            <ImageBackground source={todayImage} style={style.imageBar}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={style.taskList}>
                <Text>Task #01</Text>
                <Text>Task #02</Text>
                <Text>Task #03</Text>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    imageBar: {
        flexGrow: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginBottom:20
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    },
    taskList: {
        flexGrow: 7
    }
});
export default TaskList;
