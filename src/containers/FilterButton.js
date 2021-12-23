import { connect } from 'react-redux'

import type { Dispatch } from 'redux'

import { filterTodo } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.status === state.status,
})

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps) => ({
  onClick: () => {
    dispatch(filterTodo(ownProps.status))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
