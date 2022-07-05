import types from "../types";


const initialState = {
    token: null,
    isLoading: false,
    userInfo: {},
    users: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, token: action.payload };
        case types.IS_LOADING:
            return { ...state, isLoading: action.payload };
        case types.USERINFO:
            return { ...state, userInfo: action.payload };
        case types.USER_LIST:
            return { ...state, users: action.payload };
        default:
            return state;
    }

};


export default userReducer;