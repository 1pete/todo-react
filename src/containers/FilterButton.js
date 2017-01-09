import { connect } from 'react-redux'

import { filterTodo } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.status === state.status,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterTodo(ownProps.status))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button)
