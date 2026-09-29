import { describe, expect, it } from 'vitest'

import { getDueStatus, toInputValue } from '../src/features/todos/dates'

const today = new Date(2026, 8, 29) // 29 Sep 2026, local time

describe('getDueStatus', () => {
  it.each([
    [null, null],
    ['2026-09-28', { text: 'overdue', overdue: true }],
    ['2026-09-29', { text: 'due today', overdue: false }],
    ['2026-09-30', { text: 'due tomorrow', overdue: false }],
    ['2026-10-04', { text: 'due in 5 days', overdue: false }],
    ['2026-10-05', null],
  ])('%s -> %o', (dueDate, expected) => {
    expect(getDueStatus(dueDate, today)).toEqual(expected)
  })
})

describe('toInputValue', () => {
  it('keeps date-only strings as the same calendar day', () => {
    expect(toInputValue('2026-09-29')).toBe('2026-09-29')
    expect(toInputValue(null)).toBe('')
  })
})
