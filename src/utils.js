// @flow

export function uuid(): string {
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

export default uuid
