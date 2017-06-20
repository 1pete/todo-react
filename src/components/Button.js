import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ active, children, onClick }) => (
  <button
    className={classNames('pt-button', 'pt-minimal', active && 'pt-active')}
    onClick={() => { onClick() }}
  >
    {children}
  </button>
)

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
