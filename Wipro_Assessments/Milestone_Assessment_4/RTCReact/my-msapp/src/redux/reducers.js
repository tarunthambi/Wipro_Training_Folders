import { combineReducers } from 'redux';
import { SET_USER, LOGOUT_USER, SEND_MESSAGE, RECEIVE_MESSAGE } from './actions';


const initialUserState = {
    user: null,
};

const initialChatState = {
    messages: [],
};


const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};


const chatReducer = (state = initialChatState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case RECEIVE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
});

export default rootReducer;
