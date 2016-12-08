import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import List from '../components/List'

const getVisibleItems = (items, status) => {
  switch (status) {
    case 'COMPLETED':
      return items.filter(t => t.completed)
    case 'ACTIVE':
      return items.filter(t => !t.completed)
    default:
      return items
  }
}

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.status),
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
