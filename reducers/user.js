export const initialState = {
    isLoggedIn : false,
    me : null,
    signUpData : {},
    loginData : {},
}
export const loginRequestAction = (data) => {
    return {
        type : 'LOG_IN_REQUEST',
        data,
    }
}
export const loginSuccessAction = (data) => {
    return {
        type : 'LOG_IN_SUCCESS',
        data,
    }
}
export const loginFailureAction= (data) => {
    return {
        type : 'LOG_IN_FAILURE',
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type : 'LOG_OUT_REQUEST'
    }
}

export const logoutSuccessAction = () => {
    return {
        type : 'LOG_OUT_SUCCESS'
    }
}

export const logoutFailureAction = () => {
    return {
        type : 'LOG_OUT_FAILURE'
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOG_IN_REQUEST' :
            return {
                ...state,
                isLoggedIn:  true,
                me : action.data,
            };
        case 'LOG_IN_SUCCESS' :
            return {
                ...state,
                isLoggedIn:  true,
                me : null,
            };
        case 'LOG_IN_FAILURE' :
            return {
                ...state,
                isLoggedIn:  false,
                me : null,
            };
        case 'LOG_OUT_REQUEST' :
            return {
                ...state,
                isLoggedIn:  true,
                me : action.data,
            };
        case 'LOG_OUT_SUCCESS' :
            return {
                ...state,
                isLoggedIn:  true,
                me : null,
            };
        case 'LOG_OUT_FAILURE' :
            return {
                ...state,
                isLoggedIn:  false,
                me : null,
            };
        default :
            return state;
    }
}

export default reducer;
