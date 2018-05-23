// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
  dueDate: ?string,
  description: string,
}

class Detail extends Component<Props, State> {
  static defaultProps = {
    title: '',
    dueDate: '',
    description: '',
    saveLabel: '',
    redirect: false,
  }

  state = {
    title: '',
    dueDate: moment().format('YYYY-MM-DD'),
    description: '',
  }

  componentDidMount() {
    const {
      title,
      dueDate,
      description,
      history,
      redirect,
    } = this.props

    if (redirect) {
      history.push('/')
      return
    }

    this.setState({
      title,
      dueDate,
      description,
    })
  }

  onSave = () => {
    const { onSave, history } = this.props
    const { title, dueDate, description } = this.state

    if (!title || !title.trim()) return

    onSave({ title: title.trim(), dueDate, description: (description || '').trim() })
    history.push('/')
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleDateChange = (event) => {
    let dateValue = event.target.value
    this.setState({ dueDate: dateValue ? moment.utc(dateValue) : null })
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }

  render() {
    let { saveLabel, classes } = this.props
    let { title, dueDate, description } = this.state
    const dueDateString = dueDate ? moment(dueDate).format('YYYY-MM-DD') : null

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
          variant="raised"
          className={classes.button}
          onClick={this.onSave}
        >
          {saveLabel || 'Save'}
        </Button>
      </form>
    )
  }
}

export default withRouter(withStyles(styles)(Detail))
