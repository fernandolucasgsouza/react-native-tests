import moment from 'moment';
import 'moment/locale/pt-br';
import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, FlatList } from 'react-native';

import Task from '../../components/Task';
import todayImage from '../../../assets/imgs/today.jpg';
import commonStyles from '../../common/common.styles';

const TaskList = () => {
   
    initialState = [
        {
            id: Math.random(),
            desc: 'By React Native Book 01',
            estimateAt: new Date(),
            doneAt: new Date(),
        },
        {
            id: Math.random(),
            desc: 'Read React Native Book 02',
            estimateAt: new Date(),
            doneAt:null,
        },
    ]
   
    const [tasks, setTasks] =  useState(initialState);
    
    const today = moment().locale('pt-br').format('ddd, D [de] MMM');

    
    const toogleTask = taskId =>{
         const tasksArray = [...tasks];
 
         tasksArray.forEach(task => {
             if(task.id === taskId){
                 task.doneAt = task.doneAt ? null : new Date();
             };
         });
 
         setTasks(tasksArray);
     }
    
    return (
        <View style={style.container}>

            <ImageBackground source={todayImage} style={style.imageBar}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={style.taskList}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item})=><Task {...item} toogleTask={toogleTask}/>}
                />

            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBar: {
        flex: 3
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
        marginBottom: 20
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    },
    taskList: {
        flex: 7
    }
});
export default TaskList;
