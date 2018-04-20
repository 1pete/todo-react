// @flow

import { connect } from 'react-redux'
import moment from 'moment'

import type { Dispatch } from 'redux'

import Detail from '../components/Detail'

import { addTodo } from '../actions'

const mapStateToProps = () => ({
  dueDate: moment.utc().startOf('day'),
  saveLabel: 'Add',
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSave: ({ title, dueDate, description }) => {
    dispatch(addTodo({ title, dueDate, description }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
