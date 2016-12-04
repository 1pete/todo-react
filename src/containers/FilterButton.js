import { connect } from 'react-redux';

import { filterTodo } from '../actions';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.status === state.status,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterTodo(ownProps.status));
  },
});

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default FilterButton;
