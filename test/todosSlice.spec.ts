import { describe, expect, it } from 'vitest'

import reducer, {
  todoAdded,
  todoDeleted,
  todoEdited,
  todoToggled,
} from '../src/features/todos/todosSlice'
import filterReducer, { filterChanged } from '../src/features/todos/filterSlice'

const fields = { title: 'Buy milk', description: '', dueDate: '2026-10-01' }

describe('todos reducer', () => {
  it('starts empty', () => {
    expect(reducer(undefined, { type: 'init' })).toEqual([])
  })

  it('adds, edits, toggles and deletes a todo', () => {
    let state = reducer([], todoAdded(fields))
    expect(state).toHaveLength(1)
    const { id } = state[0]
    expect(state[0]).toMatchObject({ ...fields, completed: false })

    state = reducer(state, todoEdited({ id, ...fields, title: 'Buy oat milk' }))
    expect(state[0].title).toBe('Buy oat milk')

    state = reducer(state, todoToggled(id))
    expect(state[0].completed).toBe(true)

    state = reducer(state, todoDeleted(id))
    expect(state).toEqual([])
  })
})

describe('filter reducer', () => {
  it('defaults to ALL and changes on filterChanged', () => {
    expect(filterReducer(undefined, { type: 'init' })).toBe('ALL')
    expect(filterReducer('ALL', filterChanged('COMPLETED'))).toBe('COMPLETED')
  })
})
