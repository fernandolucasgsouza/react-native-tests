import React from 'react';
import { Text } from 'react-native';

const random = (min, max) => parseInt(Math.random() * (max - min) + 1) + min;

export default ({ min, max }) => (<Text>Número sorteiado foi : {random(min, max)}</Text>);