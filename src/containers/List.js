// @flow

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import List from '../components/List'

const getFlag = (status) => {
  switch (status) {
    case 'COMPLETED':
      return true
    case 'ACTIVE':
      return false
    default:
      return null
  }
}

const mapStateToProps = state => ({
  items: state.items,
  flag: getFlag(state.status),
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
