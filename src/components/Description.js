import React, { Component, PropTypes } from 'react';
import { DateInput } from '@blueprintjs/datetime';

class Description extends Component {
  constructor() {
    super();
    this.state = {};
    this.onSave = this.onSave.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
  }

  componentWillMount() {
    if (this.props.redirect) {
      this.context.router.transitionTo('/');
      return;
    }

    this.setState({
      title: this.props.title,
      dueDate: this.props.dueDate ? new Date(this.props.dueDate) : '',
      detail: this.props.detail,
    });
  }

  onSave() {
    let { title, dueDate, detail } = this.state;

    if (!title || !title.trim()) return;

    this.props.onSave({ title: title.trim(), dueDate, detail: (detail || '').trim() });
    this.context.router.transitionTo('/');
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDateChange(date) {
    this.setState({ dueDate: date });
  }

  handleDetailChange(event) {
    this.setState({ detail: event.target.value });
  }

  render() {
    let { saveLabel } = this.props;
    let { title, dueDate, detail } = this.state;

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
          />
        </label>
        <label className="pt-label">
          Due Date
        </label>
        <div className="pt-input-group">
          <span className="pt-icon pt-icon-calendar" />
          <DateInput value={dueDate} onChange={this.handleDateChange} />
        </div>
        <label className="pt-label">
          Detail
          <textarea
            className="pt-input"
            rows={10}
            style={{ width: '100%' }}
            defaultValue={detail}
            placeholder="Insert detail..."
            onChange={this.handleDetailChange}
          />
        </label>
        <button className="pt-button pt-intent-primary" onClick={this.onSave}>{ saveLabel || 'Save' }</button>
      </div>
    );
  }
}

Description.contextTypes = {
  router: PropTypes.object,
};

Description.propTypes = {
  title: PropTypes.string,
  dueDate: PropTypes.object,
  detail: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  saveLabel: PropTypes.string,
  redirect: PropTypes.bool,
};

export default Description;
