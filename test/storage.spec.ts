import { describe, expect, it } from 'vitest'

import { parseLegacyState } from '../src/app/storage'

describe('parseLegacyState', () => {
  it('reads state saved by redux-persist', () => {
    const items = [
      {
        id: 'a1',
        title: 'Old todo',
        dueDate: '2021-12-20T17:00:00.000Z',
        description: 'desc',
        completed: true,
      },
      { id: 'b2', title: 'No date', dueDate: '', completed: false },
    ]
    const raw = JSON.stringify({
      items: JSON.stringify(items),
      status: JSON.stringify('ACTIVE'),
      _persist: JSON.stringify({ version: -1, rehydrated: true }),
    })

    expect(parseLegacyState(raw)).toEqual({
      filter: 'ACTIVE',
      todos: [
        { ...items[0] },
        {
          id: 'b2',
          title: 'No date',
          description: '',
          dueDate: null,
          completed: false,
        },
      ],
    })
  })
})
