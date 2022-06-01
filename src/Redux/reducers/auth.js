import types from "../types";


const initialState = {
    token: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, token: action.payload };
        default:
            return state;
    }

};


export default userReducer;