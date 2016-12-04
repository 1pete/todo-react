import moment from 'moment';
import { connect } from 'react-redux';

import Description from '../components/Description';

import { editTodo } from '../actions';

const mapStateToProps = (state, ownProps) => {
  let item = state.items.find(i => i.id === ownProps.itemId);

  if (!item) return { redirect: true };

  return {
    title: item.title,
    dueDate: moment(item.dueDate),
    detail: item.detail,
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: ({ id, title, dueDate, detail }) => {
    dispatch(editTodo({ id, title, dueDate, detail }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
