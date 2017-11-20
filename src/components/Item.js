import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import moment from 'moment'
import PropTypes from 'prop-types'

import './Item.css'

const Item = ({
  id,
  title,
  dueDate,
  completed,
  onCheck,
  onDelete,
  style,
}) => {
  const today = moment.utc().startOf('day')
  const getDueDateInfo = () => {
    const diff = today.diff(dueDate, 'day')
    if (diff < -5) return null

    let text
    let decoratorClass = 'text-muted'

    if (diff > 0) {
      text = 'overdue'
      decoratorClass = 'text-error'
    } else if (diff === 0) {
      text = 'due today'
    } else if (diff === -1) {
      text = 'due tomorrow'
    } else {
      text = `due in ${-diff} days`
    }

    return <span className="text-duedate"> - <span className={decoratorClass}>{text}</span></span>
  }

  return (
    <li style={style} className={classNames('item-todo', completed && 'is-complete')}>
      <label className="pt-control pt-checkbox">
        <input type="checkbox" onChange={() => onCheck(id)} defaultChecked={completed} />
        <span className="pt-control-indicator" />
      </label>
      <Link to={`/item/${id}`}>
        <span className="text-title">{title}</span>
        {!completed ? getDueDateInfo() : null}
      </Link>
      <button className="pt-button pt-minimal pt-icon-cross" onClick={() => onDelete(id)} />
    </li>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.any,
  completed: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  style: PropTypes.object,
}

Item.defaultProps = {
  dueDate: null,
  completed: false,
  style: null,
}

export default Item
