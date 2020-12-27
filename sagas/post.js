import axios from "axios";
import {all, delay, fork, put, takeLatest} from "redux-saga/effects";

/** === redux saga effects list ===
 * all : 동시실행
 * fork : 함수를 실행한다는 의미 (비동기함수 호출)
 * call : 함수를 실행 (동기함수 호출)
 * take : LOG_IN action이 실행될때까지 기다리겠다.
 * takeEvery : take는 한번만 실행하고 말지만, takeEvery는 event 리스너 처럼 수행
 * takeLatest : takeEvery역할을 하면서 실수로 마우스클릭을 두번 또는 여러번 눌렀을경우에 대한 대응도 해줌(마지막 클릭 액션에대해서만 수행).
 * throttle : 시간설정을주어 그시간동안 1번만 수행되도록 함
 * put : dispatch 개념이라고 생각하면됨.
 */

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try{
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000); //api가아닌 더미데이터 사용시 임시
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

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

//generator saga
export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}
