const initialState = {
    name : 'donghyi.seo',
    age : 27,
    password : 'babo'
}
const changeNickname = (data) => {
    return {
        type : 'CHANGE_NICKNAME',
        data,
    }
}
changeNickname('boogicho');

const rootReducer = (state =initialState, action) => {
    switch (action.type){
        case 'CHANGE_NICKNAME' :
            return {
                ...state,
                name : action.data,
            }
    }
}
export default rootReducer;
