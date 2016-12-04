import moment from 'moment';
import { connect } from 'react-redux';

import Description from '../components/Description';

import { addTodo } from '../actions';

const mapStateToProps = () => ({
  dueDate: moment().startOf('day'),
  saveLabel: 'Add',
});

const mapDispatchToProps = dispatch => ({
  onSave: ({ title, dueDate, detail }) => { dispatch(addTodo({ title, dueDate, detail })); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
