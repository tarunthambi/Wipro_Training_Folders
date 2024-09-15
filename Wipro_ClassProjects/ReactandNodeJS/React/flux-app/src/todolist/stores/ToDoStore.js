import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

let todos = [];

class ToDoStore extends EventEmitter {
  getAll() {
    return todos;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  emitChange() {
    this.emit('change');
  }
}

const todoStore = new ToDoStore();

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'ADD_TODO':
      todos.push(action.text);
      todoStore.emitChange();
      break;

    case 'REMOVE_TODO':
      todos.splice(action.index, 1);
      todoStore.emitChange();
      break;

    default:
      break;
  }
});

export default todoStore;