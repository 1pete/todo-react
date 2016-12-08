import { combineReducers } from 'redux'

import items from './items'
import status from './status'

export default combineReducers({
  items,
  status,
})
