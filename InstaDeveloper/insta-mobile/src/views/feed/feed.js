
import React, { Fragment, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    FlatList,
    Platform,
} from 'react-native';
import getFeeds from '../../services/feed-service';
import { PhotoCard } from '../../components/photo-card';
import { HeaderCard } from '../../components/header-card';
import { CommentsCard } from '../../components/comments-card';
import { likePhoto, likeValidate } from '../../services/likes-service';
import addCommentary from '../../services/comments-card-service';

// TODO lista temoporaria
const informations = [
    { id: 1, userName: 'Fernando', userPhoto: require('../../../assets/images/fernando.jpg') },
    { id: 2, userName: 'Renata', userPhoto: require('../../../assets/images/renata.png') },
    { id: 3, userName: 'Luanda', userPhoto: require('../../../assets/images/luanda.png') },
]

const Feed = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getFeeds(setPhotos);
    }, []);

    return (
        <SafeAreaView style={{ marginTop: 0 }}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <>
                        <HeaderCard
                            userName={item.userName}
                            urlUserPhoto={item.userURL} />

                        <PhotoCard
                            urlPhoto={item.url}
                            description={item.description}
                            likesTotal={item.likes}
                            likePhoto={likePhoto}
                            likeValidate={likeValidate} />

                        <CommentsCard
                            comments={item.comentarios}
                            addCommentary={addCommentary} />
                    </>
                }
            />
        </SafeAreaView >
    );
};

Feed.navigationOptions = ({ navigation }) => {
    const options = {
        title: navigation.getParam('userName')
    }

    return options;
}

export default Feed;
