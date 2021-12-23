import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { format } from 'date-fns'

import { withStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'

import type { RouterHistory } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
  },
  button: {
    marginLeft: 20,
    marginTop: 5,
  },
}

type Props = {
  title?: string,
  dueDate?: any,
  description?: string,
  onSave: Function,
  saveLabel?: string,
  redirect?: boolean,
  history: RouterHistory,
  classes: Object,
}

type State = {
  title: string,
  dueDate: Date,
  description: string,
}

class Detail extends Component<Props, State> {
  state = {
    title: '',
    dueDate: new Date(),
    description: '',
  }

  constructor(props) {
    super(props)

    const { title, dueDate, description } = props

    this.state = {
      title,
      dueDate,
      description,
    }
  }

  componentDidMount() {
    const { history, redirect } = this.props

    if (redirect) {
      history.push('/')
    }
  }

  onSave = () => {
    const { onSave, history } = this.props
    const { title, dueDate, description } = this.state

    if (!title || !title.trim()) return

    onSave({
      title: title.trim(),
      dueDate,
      description: (description || '').trim(),
    })
    history.push('/')
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleDateChange = (event) => {
    let dateValue = event.target.value
    this.setState({ dueDate: dateValue ? new Date(dateValue) : null })
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }

  render() {
    let { saveLabel, classes } = this.props
    let { title, dueDate, description } = this.state
    const dueDateString = dueDate ? format(new Date(dueDate), 'yyyy-MM-dd') : ''

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="title"
          label="Title"
          className={classes.textField}
          placeholder="Insert task name..."
          value={title}
          onChange={this.handleTitleChange}
          margin="normal"
        />
        <TextField
          id="date"
          label="Due Date"
          type="date"
          defaultValue={dueDateString}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleDateChange}
        />
        <TextField
          id="description"
          label="Description"
          className={classes.textField}
          placeholder="Insert description..."
          value={description}
          onChange={this.handleDescriptionChange}
          margin="normal"
          multiline
          rows={5}
        />
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={this.onSave}
        >
          {saveLabel || 'Save'}
        </Button>
      </form>
    )
  }
}

Detail.defaultProps = {
  title: '',
  dueDate: '',
  description: '',
  saveLabel: '',
  redirect: false,
}

export default withRouter(withStyles(styles)(Detail))
