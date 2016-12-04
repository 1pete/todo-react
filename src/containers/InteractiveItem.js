import { connect } from 'react-redux';

import Item from '../components/Item';
import { deleteTodo, toggleTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
  onCheck: (id) => { dispatch(toggleTodo(id)); },
  onDelete: (id) => { dispatch(deleteTodo(id)); },
});

export default connect(null, mapDispatchToProps)(Item);
