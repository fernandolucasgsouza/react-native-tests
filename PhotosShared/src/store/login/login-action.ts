import { USER_LOGGED_IN, USER_LOGGED_OUT } from './login-types';

export const login = (userAuth: any) => {
    return {
        type: USER_LOGGED_IN,
        payload: userAuth,
    };
};

export const logout = () => ({
    type: USER_LOGGED_OUT,
});
