import { differenceInCalendarDays, format, parseISO } from 'date-fns'

/** Parses a stored due date; date-only strings are read as local midnight. */
export const parseDueDate = (dueDate: string) => parseISO(dueDate)

/** Formats a stored due date for an `<input type="date">`. */
export const toInputValue = (dueDate: string | null) =>
  dueDate ? format(parseDueDate(dueDate), 'yyyy-MM-dd') : ''

export type DueStatus = { text: string; overdue: boolean }

/** Label for todos due within the next 5 days (or overdue); otherwise null. */
export function getDueStatus(
  dueDate: string | null,
  today: Date = new Date(),
): DueStatus | null {
  if (!dueDate) return null

  const daysLeft = differenceInCalendarDays(parseDueDate(dueDate), today)

  if (daysLeft < 0) return { text: 'overdue', overdue: true }
  if (daysLeft === 0) return { text: 'due today', overdue: false }
  if (daysLeft === 1) return { text: 'due tomorrow', overdue: false }
  if (daysLeft <= 5) return { text: `due in ${daysLeft} days`, overdue: false }
  return null
}
