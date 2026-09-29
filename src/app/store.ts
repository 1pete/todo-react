import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import filter from '../features/todos/filterSlice'
import todos from '../features/todos/todosSlice'
import { loadState, saveState } from './storage'

const rootReducer = combineReducers({ todos, filter })

export type RootState = ReturnType<typeof rootReducer>

export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({ reducer: rootReducer, preloadedState })
}

export const store = makeStore(loadState())

let lastSaved: RootState | undefined
store.subscribe(() => {
  const state = store.getState()
  if (state === lastSaved) return
  lastSaved = state
  saveState(state)
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
