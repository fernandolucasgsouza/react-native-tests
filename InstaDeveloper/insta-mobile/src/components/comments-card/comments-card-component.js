import React, { useState } from 'react';
import {
    Text, FlatList, View, TextInput, Image, TouchableOpacity
} from 'react-native';

import commentsCardStyle from "./comments-card-style";

const CommentsCard = ({ comments, addCommentary }) => {

    let inputText = '';
    let inputTextRef;
    const [commentsState, setCommentsState] = useState(comments);

    const setCommentary = () => {
        inputTextRef.clear();
        addCommentary(inputText, 'fernando.souza', commentsState, setCommentsState)
    };

    return (
        <>
            <FlatList
                data={commentsState}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View>
                        <Text style={commentsCardStyle.commentary}>
                            {item.userName} {item.text}
                        </Text>
                    </View>
                }
            />
            <View style={commentsCardStyle.containerInputComments}>
                <TextInput
                    ref={textInput => inputTextRef = textInput}
                    onChangeText={text => inputText = text}
                    style={{ flex: 1 }}
                    placeholder={"Deixe seu comentário"}
                />
                <TouchableOpacity onPress={setCommentary}>
                    <Image
                        style={commentsCardStyle.iconSend}
                        source={require('../../../assets/images/send.png')} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default CommentsCard;
