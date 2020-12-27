
export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname : '제로초'
        },
        content : '첫 번째 게시글 #해시태그 #익스프레스',
        Images : [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments : [
            {
                User : {
                    nicknam : 'nero'
                },
                content : '우와 개정판 나왔네'
            },
            {
                User : {
                    nicknam : 'nero1'
                },
                content : '우와 개정판 나왔네 ㅊㅋ ㅊㅋ'
            }
        ]
    }],
    imagePaths : [],
    postAdded : false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
}
const dumyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST :
            return {
                ...state,
                mainPosts: [dumyPost, ...state.mainPosts],
                postAdded: true
            }
        default :
            return state;
    }
}

export default reducer;