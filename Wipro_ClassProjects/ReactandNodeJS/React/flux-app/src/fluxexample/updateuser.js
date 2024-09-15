import AppDispatcher from "./dispatcher";

export const updateuser=(user)=>{
    AppDispatcher.dispatch({
        type:'UPDATE_USER',
        payload:user
    });
};