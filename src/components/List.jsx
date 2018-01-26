// @flow

import React from 'react'

import Item from '../containers/InteractiveItem'

import './List.css'

type Props = {
  flag?: boolean,
  items: Array<any>,
}

function List({ items, flag }: Props) {
  const filteredItems = flag == null ? items : items.filter(item => !!item.completed === flag)

  return (
    <div>
      <div className="pt-non-ideal-state" style={{ opacity: +!filteredItems.length }}>
        <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
          <span className="pt-icon pt-icon-inbox" />
        </div>
        <h4 className="pt-non-ideal-state-title">List is empty</h4>
        <div className="pt-non-ideal-state-description">Try create a new to-do.</div>
      </div>
      <ul className="list-container">
        {filteredItems.map(data => <Item key={data.id} {...data} />)}
      </ul>
    </div>
  )
}

List.defaultProps = {
  flag: null,
}

export default List
