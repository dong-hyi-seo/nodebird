import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from "axios";

/**
 * all : 동시실행
 * fork : 함수를 실행한다는 의미 (비동기함수 호출)
 * call : 함수를 실행 (동기함수 호출)
 * take : LOG_IN action이 실행될때까지 기다리겠다.
 * put : dispatch 개념이라고 생각하면됨.
 */
function logInAPI(data) {
    return axios.post('/api/login', data)
}

function* logIn(action) {
    try{
        const result = yield call(logInAPI, action.data);
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : result.data
        });
    }catch(err){
        yield put({
            type : 'LOG_IN_FAILURE',
            data : err.response.data
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try{
        const result = yield call(logOutAPI);
        yield put({
            type : 'LOG_OUT_SUCCESS',
            data : result.data
        });
    }catch(err){
        yield put({
            type : 'LOG_OUT_FAILURE',
            data : err.response.data
        });
    }
}

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try{
        const result = yield call(addPostAPI, action.data);
        yield put({
            type : 'ADD_POST_SUCCESS',
            data : result.data
        });
    }catch(err){
        yield put({
            type : 'ADD_POST_FAILURE',
            data : err.response.data
        });
    }
}

function* watchLogin() {
    yield take('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut)
}
function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

//generator saga
export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),
    ])
}