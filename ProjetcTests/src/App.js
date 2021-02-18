import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import Contador from './components/Contador';
import ContadorState from './components/contador-state/ContadorState';
import Family from './components/family/Family';
import Members from './components/family/Members';
import FlexBox from './components/layout/FlexBox';
import Random from './components/RandomNumbers';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flexGrow: 1, justifyContent: 'center' }}>
                {/* <ScrollView> */}
                <FlexBox />

                {/* 
                    <Family>
                        <Members member={{ firstName: "Fernando", lastName:"Souza" }} />
                        <Members member={{ firstName: "Lucas", lastName: "Souza" }} />
                    </Family>
                    <Family>
                        <Members member={{ firstName: "Joana", lastName: "Silva" }} />
                        <Members member={{ firstName: "Pedro", lastName: "Silva" }} />
                    </Family>
                    <ContadorState initial={0}/> 
                    <Contador initial={100} step={2} />
                    <Contador />
                    <Random min={10} max={60}/>
                */}

                {/* </ScrollView> */}
            </SafeAreaView>
        </>
    );
};
export default App;

