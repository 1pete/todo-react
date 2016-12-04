import { uuid } from '../utils';

export const STORE_LOADED = 'STORE_LOADED';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODO = 'FILTER_TODO';
export const LOAD_TODO = 'LOAD_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = props => ({
  type: ADD_TODO,
  id: uuid(),
  completed: false,
  ...props,
});

export const editTodo = props => ({
  type: EDIT_TODO,
  ...props,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

export const filterTodo = status => ({
  type: FILTER_TODO,
  status,
});

export const selectTodo = id => ({
  type: SELECT_TODO,
  id,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
