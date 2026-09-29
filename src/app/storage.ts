import type { Filter } from '../features/todos/filterSlice'
import type { Todo } from '../features/todos/todosSlice'

export type PersistedState = {
  todos: Todo[]
  filter: Filter
}

const STORAGE_KEY = 'todo-react'
/** Key used by redux-persist in versions before the Vite migration */
const LEGACY_STORAGE_KEY = 'persist:todo-react'

/**
 * redux-persist stored each top-level slice as its own JSON string:
 * `{ "items": "[...]", "status": "\"ALL\"", "_persist": "{...}" }`
 */
export function parseLegacyState(raw: string): PersistedState | undefined {
  const outer = JSON.parse(raw) as Record<string, string>
  if (!outer.items) return undefined

  const items = JSON.parse(outer.items) as Partial<Todo>[]
  const status = outer.status ? (JSON.parse(outer.status) as Filter) : 'ALL'

  return {
    todos: items.map((item) => ({
      id: String(item.id),
      title: item.title ?? '',
      description: item.description ?? '',
      dueDate: item.dueDate || null,
      completed: !!item.completed,
    })),
    filter: status,
  }
}

export function loadState(): PersistedState | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as PersistedState

    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY)
    if (legacy) return parseLegacyState(legacy)
  } catch {
    // Corrupt or inaccessible storage: start with an empty list
  }
  return undefined
}

export function saveState(state: PersistedState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    localStorage.removeItem(LEGACY_STORAGE_KEY)
  } catch {
    // Storage full or blocked; nothing useful to do
  }
}
