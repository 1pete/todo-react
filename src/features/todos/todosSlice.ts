import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: string
  title: string
  description: string
  /** `yyyy-MM-dd`, or a full ISO timestamp for todos saved by older versions */
  dueDate: string | null
  completed: boolean
}

export type TodoFields = Pick<Todo, 'title' | 'description' | 'dueDate'>

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    todoAdded: {
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload)
      },
      prepare(fields: TodoFields) {
        return { payload: { id: nanoid(), completed: false, ...fields } }
      },
    },
    todoEdited(state, action: PayloadAction<TodoFields & { id: string }>) {
      const todo = state.find((t) => t.id === action.payload.id)
      if (todo) Object.assign(todo, action.payload)
    },
    todoToggled(state, action: PayloadAction<string>) {
      const todo = state.find((t) => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    todoDeleted(state, action: PayloadAction<string>) {
      return state.filter((t) => t.id !== action.payload)
    },
  },
})

export const { todoAdded, todoEdited, todoToggled, todoDeleted } =
  todosSlice.actions

export default todosSlice.reducer
