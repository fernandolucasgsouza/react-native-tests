import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import ContadorButton from './ContadorButton';
import ContadorDisplay from './ContadorDisplay';

const ContadorState = ({initial}) => {

    const [num, setNum] = useState(initial);
    const increment = () => { setNum(num + 1) }
    const decrement = () => { setNum(num - 1) }

    return (
        <>
            <Text style={style.title}>Contador</Text>
            <ContadorDisplay num={num} />
            <ContadorButton increment={increment} decrement={decrement} />
        </>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ContadorState;
