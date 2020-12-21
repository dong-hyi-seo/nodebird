const {createWrapper} = require('next-redux-wrapper')
import {createStore} from 'redux';

import reducer from '../reducers';

const configureStore = () => {
    const store = createStore(reducer, enhancer)
    store.dispatch({
        type : 'CHANGE_NICKNAME',
        data : 'boogicho'
    })
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === 'development',
});

export default wrapper;
