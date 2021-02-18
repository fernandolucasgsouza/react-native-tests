import React, { useState } from 'react';
import { Button, Text } from 'react-native';


const Contador = ({ initial = 0, step = 1 }) => {
    const [valueState, setValueState] = useState(initial);

    const increment = () => setValueState(valueState + step);
    const decrement = () => setValueState(valueState - step);

    return (
        <>
            <Button title=" - " onPress={decrement} />
            <Text style={{ margin: 25 }}>{valueState}</Text>
            <Button title=" + " onPress={increment} />
        </>
    );
};

export default Contador;