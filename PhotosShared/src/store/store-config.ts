import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './login/login-reducer';

const reducers = combineReducers({
    userAuth: loginReducer,
});

const storeConfig = () => {
    return createStore(reducers, applyMiddleware(thunk));
};

export default storeConfig;
