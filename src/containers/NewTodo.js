import { connect } from 'react-redux'
import moment from 'moment'

import Detail from '../components/Detail'

import { addTodo } from '../actions'

const mapStateToProps = () => ({
  dueDate: moment.utc().startOf('day'),
  saveLabel: 'Add',
})

const mapDispatchToProps = dispatch => ({
  onSave: ({ title, dueDate, description }) => {
    dispatch(addTodo({ title, dueDate, description }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
