import { FILTER_TODO } from '../actions'

type Action = {
  type: string,
  status: string,
}

export default (state: string = 'ALL', action: Action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.status
    default:
      return state
  }
}
