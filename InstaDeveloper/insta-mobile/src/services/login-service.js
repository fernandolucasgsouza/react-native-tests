import { Platform } from "react-native";

const loggerService = async (userName, password) => {

    const domain = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
    const headers = {
        method: 'POST',
        body: JSON.stringify({
            userName,
            password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${domain}:3030/users/login`, headers);

    console.warn(response)
    if (response.ok)
        return response.headers.get('x-access-token');
    else
        throw new Error('Não foi possível logar.');

};

export default loggerService;
