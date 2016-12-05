import { connect } from 'react-redux';

import Description from '../components/Description';

import { addTodo } from '../actions';
import { today } from '../utils';

const mapStateToProps = () => ({
  dueDate: today(),
  saveLabel: 'Add',
});

const mapDispatchToProps = dispatch => ({
  onSave: ({ title, dueDate, detail }) => { dispatch(addTodo({ title, dueDate, detail })); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
