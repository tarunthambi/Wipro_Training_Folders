import AppDispatcher from '../dispatcher/AppDispatcher';

export const ToDoActions = {
  addTodo: (text) => {
    AppDispatcher.dispatch({
      actionType: 'ADD_TODO',
      text
    });
  },
  removeTodo: (index) => {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_TODO',
      index
    });
  }
};