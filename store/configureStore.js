const {createWrapper} = require('next-redux-wrapper')
import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

//redux-thunk : 리덕스 비동기 제공
const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware]; //redux-thunk
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer)
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === 'development',
});

export default wrapper;
