// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import type { RouterHistory } from 'react-router-dom'

type Props = {
  title?: string,
  dueDate?: any,
  description?: string,
  onSave: Function,
  saveLabel?: string,
  redirect?: boolean,
  history: RouterHistory,
}

type State = {
  title: string,
  dueDate: ?string,
  description: string,
}

const defaultProps = {
  title: '',
  dueDate: '',
  description: '',
  saveLabel: '',
  redirect: false,
}

class Detail extends Component<Props, State> {
  static defaultProps = defaultProps

  state = {
    title: '',
    dueDate: null,
    description: '',
  }

  componentWillMount() {
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
      title: title,
      dueDate: dueDate,
      description: description,
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
    let { saveLabel } = this.props
    let { title, dueDate, description } = this.state
    const dueDateString = moment(dueDate).format('YYYY-MM-DD')

    return (
      <div className="component-description">
        <label htmlFor="input-title" className="pt-label">
          Title
          <input
            id="input-title"
            className="pt-input pt-large"
            type="text"
            style={{ width: '100%' }}
            defaultValue={title}
            placeholder="Insert task name..."
            onChange={this.handleTitleChange}
          />
        </label>
        <label htmlFor="input-duedate" className="pt-label">
          Due Date
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-calendar" />
            <input
              id="input-duedate"
              className="pt-input"
              type="date"
              defaultValue={dueDateString}
              onChange={this.handleDateChange}
            />
          </div>
        </label>
        <label htmlFor="input-description" className="pt-label">
          Description
          <textarea
            id="input-description"
            className="pt-input"
            rows={10}
            style={{ width: '100%' }}
            defaultValue={description}
            placeholder="Insert description..."
            onChange={this.handleDescriptionChange}
          />
        </label>
        <button className="pt-button pt-intent-primary" onClick={this.onSave} type="button">
          {saveLabel || 'Save'}
        </button>
      </div>
    )
  }
}

export default withRouter(Detail)
