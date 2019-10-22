// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import moment from 'moment'

import { withStyles } from '@material-ui/core/styles'
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

import type { RouterHistory } from 'react-router-dom'

const styles = (theme) => ({
  isComplete: {
    opacity: 0.6,
  },
  isCompleteText: {
    textDecoration: 'line-through',
  },

  textDueDate: {
    ...theme.typography.subheading,
    marginRight: 5,
  },

  textMute: {
    color: '#5c7080',
  },

  textError: {
    color: '#F55656',
  },
})

type Props = {
  id: string,
  title: string,
  dueDate?: string,
  completed?: boolean,
  onCheck: Function,
  onDelete: Function,
  classes: Object,
  history: RouterHistory,
}

function Item({
  id,
  title,
  dueDate,
  completed,
  onCheck,
  onDelete,
  classes,
  history,
}: Props) {
  const today = moment.utc().startOf('day')
  const getDueDateInfo = () => {
    if (!dueDate) return null

    const diff = today.diff(dueDate, 'day')
    if (diff < -5) return null

    let text
    let decoratorClass = classes.textMute

    if (diff > 0) {
      text = 'overdue'
      decoratorClass = classes.textError
    } else if (diff === 0) {
      text = 'due today'
    } else if (diff === -1) {
      text = 'due tomorrow'
    } else {
      text = `due in ${-diff} days`
    }

    return (
      <span className={classes.textDueDate}>
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
    <ListItem
      className={classnames(classes.listItem, completed && classes.isComplete)}
    >
      <Checkbox
        checked={completed}
        tabIndex={-1}
        disableRipple
        onChange={() => onCheck(id) && false}
      />
      <ListItemText
        primary={title}
        className={classnames(completed && classes.isCompleteText)}
        onClick={() => { history.push(`/item/${id}`) }}
      />
      <ListItemSecondaryAction>
        {!completed ? getDueDateInfo() : null}
        <IconButton aria-label="Delete" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

Item.defaultProps = {
  dueDate: '',
  completed: false,
}

export default withRouter(withStyles(styles)(Item))
