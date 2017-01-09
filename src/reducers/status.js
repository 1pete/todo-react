// @flow

import { FILTER_TODO } from '../actions'

const status = (state: string = 'ALL', action:{type: string, status: string}) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.status
    default:
      return state
  }
}

export default status
