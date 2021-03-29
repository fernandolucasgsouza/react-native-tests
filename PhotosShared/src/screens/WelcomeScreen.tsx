import * as React from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    ImageFolderSvg,
    PhotoSharingSvg,
    PostPhotoSvg,
} from '../common/Icons/icons';

const { width, height } = Dimensions.get('screen');

const SVG_SIZE = width / 2;

const BGS = ['#A5BBFF', '#FFCC66', '#FF63ED', '#B98EFF'];

const DATA = [
    {
        key: '1',
        title: 'What is Lorem Ipsum?',
        description:
            'is simply dummy text of the printing and typesetting industry. ',
        image: <PhotoSharingSvg width={SVG_SIZE} height={SVG_SIZE} />,
    },
    {
        key: '2',
        title: 'Why do we use it?',
        description:
            'It is a long established fact that a reader will be distracted ',
        image: <PostPhotoSvg width={SVG_SIZE} height={SVG_SIZE} />,
    },
    {
        key: '3',
        title: 'Where does it come from?',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
        image: <ImageFolderSvg width={SVG_SIZE} height={SVG_SIZE} />,
    },
];

const Indicator = ({ scrollX }: any) => {
    return (
        <View style={styles.indicatorContainer}>
            {DATA.map((_, i) => {
                const preview = (i - 1) * width;
                const current = i * width;
                const next = (i + 1) * width;

                const inputRange = [preview, current, next];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 1, 0.6],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={`indicator-${i}`}
                        style={[
                            styles.indicator,
                            { transform: [{ scale }], opacity },
                        ]}
                    ></Animated.View>
                );
            })}
        </View>
    );
};

const BackDrop = ({ scrollX }: any) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: BGS.map((_, i) => i * width),
        outputRange: BGS.map((bg) => bg),
    });

    return (
        <Animated.View
            style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
        />
    );
};

const Square = ({ scrollX }: any) => {
    const YOLO = Animated.modulo(
        Animated.divide(
            Animated.modulo(scrollX, width),
            new Animated.Value(width)
        ),
        1
    );

    const rotate = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['35deg', '0deg', '35deg'],
    });

    const translateX = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -height, 0],
    });

    return (
        <Animated.View
            style={[
                styles.square,
                {
                    transform: [
                        {
                            rotate,
                        },
                        { translateX },
                    ],
                },
            ]}
        ></Animated.View>
    );
};

export default function WelcomeScreen() {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <BackDrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={DATA}
                keyExtractor={(item) => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                width,
                                alignItems: 'center',
                                padding: 20,
                            }}
                        >
                            <View
                                style={{
                                    flex: 0.7,
                                    width: SVG_SIZE,
                                    height: SVG_SIZE,
                                    justifyContent: 'center',
                                }}
                            >
                                {item.image}
                            </View>
                            <View
                                style={{
                                    flex: 0.3,
                                }}
                            >
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
            <Indicator scrollX={scrollX} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    text: {
        fontWeight: '300',
        color: '#FFF',
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 100,
        flexDirection: 'row',
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        margin: 10,
    },
    square: {
        width: height,
        height: height,
        backgroundColor: '#FFF',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.65,
        left: -height * 0.35,
    },
});
