import React, { Component, PropTypes } from 'react'
import moment from 'moment'

class Detail extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  static propTypes = {
    title: PropTypes.string,
    dueDate: PropTypes.any,
    description: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    saveLabel: PropTypes.string,
    redirect: PropTypes.bool,
  }

  static defaultProps = {
    title: '',
    dueDate: '',
    description: '',
    saveLabel: '',
    redirect: false,
  }

  constructor() {
    super()
    this.state = {}
    this.onSave = this.onSave.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  componentWillMount() {
    if (this.props.redirect) {
      this.context.router.history.push('/')
      return
    }

    this.setState({
      title: this.props.title,
      dueDate: this.props.dueDate,
      description: this.props.description,
    })
  }

  onSave() {
    let { title, dueDate, description } = this.state

    if (!title || !title.trim()) return

    this.props.onSave({ title: title.trim(), dueDate, description: (description || '').trim() })
    this.context.router.history.push('/')
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleDateChange(event) {
    let dateValue = event.target.value
    this.setState({ dueDate: dateValue ? moment.utc(dateValue) : null })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  render() {
    let { saveLabel } = this.props
    let { title, dueDate, description } = this.state
    const dueDateString = moment(dueDate).format('YYYY-MM-DD')

    return (
      <div className="component-description">
        <label className="pt-label">
          Title
          <input
            className="pt-input pt-large"
            type="text"
            style={{ width: '100%' }}
            defaultValue={title}
            placeholder="Insert task name..."
            onChange={this.handleTitleChange}
            autoFocus
          />
        </label>
        <label className="pt-label">
          Due Date
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-calendar" />
            <input
              className="pt-input"
              type="date"
              defaultValue={dueDateString}
              onChange={this.handleDateChange}
            />
          </div>
        </label>
        <label className="pt-label">
          Description
          <textarea
            className="pt-input"
            rows={10}
            style={{ width: '100%' }}
            defaultValue={description}
            placeholder="Insert description..."
            onChange={this.handleDescriptionChange}
          />
        </label>
        <button className="pt-button pt-intent-primary" onClick={this.onSave}>{ saveLabel || 'Save' }</button>
      </div>
    )
  }
}

export default Detail
