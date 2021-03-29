import {
    ActionLoginModel,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
} from './login-types';

const initialState = {
    name: null,
    email: null,
    cpf: null,
};

const loginReducer = (state = initialState, action: ActionLoginModel) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                cpf: action.payload,
            };

        case USER_LOGGED_OUT:
            return {
                ...state,
                payload: { name: null, email: null, cpf: null },
            };

        default:
            return state;
            break;
    }
};

export default loginReducer;
