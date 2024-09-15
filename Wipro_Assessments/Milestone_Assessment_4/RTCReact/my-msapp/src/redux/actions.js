export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message,
    };
};

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        payload: message,
    };
};
