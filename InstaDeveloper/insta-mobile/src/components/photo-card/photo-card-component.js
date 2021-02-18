import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import photoCardStyle from "./photo-card-style";

const PhotoCard = ({
    urlPhoto,
    description,
    likesTotal,
    likePhoto,
    likeValidate }) => {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(likesTotal);

    const clickLikePhoto = () => {
        const [likedStatus, total] = likePhoto(liked, likes)

        setLikes(total);
        setLiked(likedStatus);
    };


    return (
        <>
            <Image
                source={{ uri: urlPhoto }}
                style={photoCardStyle.photo} />

            <View style={photoCardStyle.constainerTxt}>
                <Text style={photoCardStyle.text}>{description}</Text>

                <TouchableOpacity
                    style={photoCardStyle.containerLikes}
                    onPress={clickLikePhoto}>
                    <Image
                        source={likeValidate(liked)}
                        style={photoCardStyle.like} />
                    <Text>{likes} curtidas</Text>
                </TouchableOpacity>
            </View>
        </>
    )

}



export default PhotoCard;
