import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import './Item.css'

const Item = ({ id, title, completed, onCheck, onDelete }) => (
  <li className={classNames('item-todo', completed && 'is-complete')}>
    <label className="pt-control pt-checkbox">
      <input type="checkbox" onChange={() => onCheck(id)} defaultChecked={completed} />
      <span className="pt-control-indicator" />
    </label>
    <Link to={`/item/${id}`}>{title}</Link>
    <button className="pt-button pt-minimal pt-icon-cross" onClick={() => onDelete(id)} />
  </li>
)

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Item
