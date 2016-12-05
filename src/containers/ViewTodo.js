import { connect } from 'react-redux';

import Description from '../components/Description';

import { editTodo } from '../actions';

const mapStateToProps = (state, ownProps) => {
  let item = state.items.find(i => i.id === ownProps.itemId);

  if (!item) return { redirect: true };

  return {
    title: item.title,
    dueDate: item.dueDate,
    detail: item.detail,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSave: ({ title, dueDate, detail }) => {
    dispatch(editTodo({ id: ownProps.itemId, title, dueDate, detail }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
