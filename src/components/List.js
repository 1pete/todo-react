import React, { Component, PropTypes } from 'react'
import { TransitionMotion, spring, presets } from 'react-motion'

import Item from '../containers/InteractiveItem'

import './List.css'

class List extends Component {
  static propTypes = {
    flag: PropTypes.bool,
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
    flag: null,
  }

  getDefaultStyles() {
    return this.props.items.map(item => ({
      data: item,
      key: item.id,
      style: { height: 0, opacity: 1 },
    }))
  }

  getStyles() {
    let { items, flag } = this.props

    if (flag != null) {
      items = items.filter(i => !!i.completed === flag)
    }

    return items
      .map(item => ({
        data: item,
        key: item.id,
        style: {
          height: spring(42, presets.gentle),
          opacity: spring(1, presets.gentles),
        },
      }))
  }

  willEnter() {
    return {
      height: 0,
      opacity: 0,
    }
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    }
  }

  render() {
    let styles = this.getStyles()

    return (
      <div>
        <div className="pt-non-ideal-state" style={{ opacity: +!styles.length }}>
          <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
            <span className="pt-icon pt-icon-inbox" />
          </div>
          <h4 className="pt-non-ideal-state-title">List is empty</h4>
          <div className="pt-non-ideal-state-description">Try create a new to-do.</div>
        </div>
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={styles}
          willLeave={this.willLeave}
          willEnter={this.willEnter}
        >
          {s =>
            <ul className="list-container">
              {s.map(({ key, style, data }) => <Item key={key} style={style} {...data} />)}
            </ul>}
        </TransitionMotion>
      </div>
    )
  }
}

export default List
