// @flow

import { connect } from 'react-redux'

import type { Dispatch } from 'redux'

import Detail from '../components/Detail'

import { editTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  let item = state.items.find((i) => i.id === ownProps.itemId)

  if (!item) return { redirect: true }

  return {
    title: item.title,
    dueDate: item.dueDate,
    description: item.description,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps) => ({
  onSave: ({ title, dueDate, description }) => {
    dispatch(
      editTodo({
        id: ownProps.itemId,
        title,
        dueDate,
        description,
      }),
    )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
