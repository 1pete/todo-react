import { connect } from 'react-redux';

import Detail from '../components/Detail';

import { addTodo } from '../actions';
import { today } from '../utils';

const mapStateToProps = () => ({
  dueDate: today(),
  saveLabel: 'Add',
});

const mapDispatchToProps = dispatch => ({
  onSave: ({ title, dueDate, description }) => {
    dispatch(addTodo({ title, dueDate, description }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
