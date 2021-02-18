import { Platform } from "react-native";

const getFeeds = async (callback) => {

    const domain = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

    const photosHttp = await fetch(`http://${domain}:3030/feed`);
    const response = await photosHttp.json();
    callback(response);
};

export default getFeeds;
