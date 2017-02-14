// @flow

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../actions'

export default function (state: Array<Object> = [], { type, ...data }:{type: string}) {
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
    return state.reduce((result, item) => {
      if (item.id === data.id) {
        return result
      }

      return [...result, item]
    }, [])
  }

  if (type === TOGGLE_TODO) {
    return state.map(item =>
      (item.id === data.id ? { ...item, completed: !item.completed } : item))
  }

  return state
}
