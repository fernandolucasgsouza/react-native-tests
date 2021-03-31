import { Dimensions } from 'react-native';

export enum DeviceDimensionTypes {
    widthWindow = Dimensions.get('window').width,
    heightWindow = Dimensions.get('window').height,

    widthScreen = Dimensions.get('screen').width,
    heightScreen = Dimensions.get('screen').height,
}

export const isSmallDevice = DeviceDimensionTypes.widthWindow < 370;
export const GUTTER_SPACING = isSmallDevice ? 15 : 20;
