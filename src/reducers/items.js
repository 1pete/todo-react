// @flow

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../actions'

type Action = {
  type: string,
  id: string,
}

export default (state: Array<Object> = [], { type, ...data }: Action) => {
  if (type === ADD_TODO) {
    return [...state, data]
  }

  if (type === EDIT_TODO) {
    return state.map((item) => {
      if (item.id === data.id) {
        return { ...item, ...data }
      }

      return item
    })
  }

  if (type === DELETE_TODO) {
    return state.filter(item => item.id !== data.id)
  }

  if (type === TOGGLE_TODO) {
    return state.map(item =>
      (item.id === data.id ? { ...item, completed: !item.completed } : item))
  }

  return state
}
