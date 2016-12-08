export function today() {
  let now = new Date()
  let year = now.getFullYear()
  let month = `${now.getMonth() + 1}`.padStart(2, '0')
  let date = `${now.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${date}`
}

export function uuid() {
  return new Array(32).fill(null).reduce((result, _, i) => {
    /* eslint-disable no-bitwise */
    let separator = ''
    if ([8, 12, 16, 20].includes(i)) {
      separator = '-'
    }

    let random = Math.random() * 16 | 0
    if (i === 12) {
      random = 4
    } else if (i === 16) {
      random = (random & 3) | 8
    }

    return `${result}${separator}${random.toString(16)}`
  }, '')
}

const STORE_KEY = 'todo-react'

export function readStore() {
  let storedData = localStorage.getItem(STORE_KEY)
  try {
    return (storedData && JSON.parse(storedData)) || []
  } catch (e) {
    return []
  }
}

export function writeStore(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data || []))
}
