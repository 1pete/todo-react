import { connect } from 'react-redux'
import { startOfToday } from 'date-fns'

import type { Dispatch } from 'redux'

import Detail from '../components/Detail'

import { addTodo } from '../actions'

const mapStateToProps = () => ({
  dueDate: startOfToday(),
  saveLabel: 'Add',
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSave: ({ title, dueDate, description }) => {
    dispatch(addTodo({ title, dueDate, description }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
