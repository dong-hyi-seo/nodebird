const {createWrapper} = require('next-redux-wrapper')
import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers';

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    return createStore(reducer, enhancer);
};

const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === 'development',
});

export default wrapper;
