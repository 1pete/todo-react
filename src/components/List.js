import React, { PropTypes } from 'react';

import Item from '../containers/InteractiveItem';

const List = ({ items }) => {
  if (!items.length) {
    return (
      <div className="pt-non-ideal-state" style={{ position: 'absolute', top: '20%' }}>
        <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
          <span className="pt-icon pt-icon-inbox" />
        </div>
        <h4 className="pt-non-ideal-state-title">List is empty</h4>
        <div className="pt-non-ideal-state-description">Try create a new to-do.</div>
      </div>
    );
  }
  return (
    <ul style={{ padding: 10, margin: 0 }}>{
      items.map(item => <Item key={item.id} {...item} />)
    }</ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
