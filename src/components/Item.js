// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import moment from 'moment'

import './Item.css'


type Props = {
  id: string,
  title: string,
  dueDate?: string,
  completed?: boolean,
  onCheck: Function,
  onDelete: Function,
  style?: Object,
}

function Item({
  id,
  title,
  dueDate,
  completed,
  onCheck,
  onDelete,
  style,
}: Props) {
  const today = moment.utc().startOf('day')
  const getDueDateInfo = () => {
    if (!dueDate) return null

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

    return (
      <span className="text-duedate">
        {' '}
        -
        {' '}
        <span className={decoratorClass}>
          {text}
        </span>
      </span>
    )
  }

  return (
    <li style={style} className={classNames('item-todo', completed && 'is-complete')}>
      <label htmlFor={`checkbox-item-${id}`} className="pt-control pt-checkbox">
        <input id={`checkbox-item-${id}`} type="checkbox" onChange={() => onCheck(id)} defaultChecked={completed} />
        <span className="pt-control-indicator" />
      </label>
      <Link to={`/item/${id}`}>
        <span className="text-title">
          {title}
        </span>
        {!completed ? getDueDateInfo() : null}
      </Link>
      <button className="pt-button pt-minimal pt-icon-cross" onClick={() => onDelete(id)} type="button" />
    </li>
  )
}

Item.defaultProps = {
  dueDate: '',
  completed: false,
  style: undefined,
}

export default Item
