import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavBar = ({ showAdd, showBack, title }) => (
  <nav className="pt-navbar pt-dark header">
    <div className="pt-navbar-group pt-align-left">
      { showBack && <Link to="/" className="pt-button pt-minimal pt-icon-chevron-left" /> }
      <div className="pt-navbar-heading">{ title || 'To-Do List' }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      { showAdd && <Link to="/new" className="pt-button pt-minimal pt-icon-add">New</Link> }
    </div>
  </nav>
)

NavBar.propTypes = {
  showAdd: PropTypes.bool,
  showBack: PropTypes.bool,
  title: PropTypes.string,
}

export default NavBar
