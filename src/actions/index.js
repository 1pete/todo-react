// @flow

import { uuid } from '../utils'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const FILTER_TODO = 'FILTER_TODO'
export const LOAD_TODO = 'LOAD_TODO'
export const SELECT_TODO = 'SELECT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (props:Object) => ({
  type: ADD_TODO,
  id: uuid(),
  completed: false,
  ...props,
})

export const editTodo = (props:Object) => ({
  type: EDIT_TODO,
  ...props,
})

export const deleteTodo = (id:string) => ({
  type: DELETE_TODO,
  id,
})

export const filterTodo = (status:string) => ({
  type: FILTER_TODO,
  status,
})

export const selectTodo = (id:string) => ({
  type: SELECT_TODO,
  id,
})

export const toggleTodo = (id:string) => ({
  type: TOGGLE_TODO,
  id,
})
