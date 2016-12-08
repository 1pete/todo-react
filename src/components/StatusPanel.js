import React from 'react'

import FilterButton from '../containers/FilterButton'

export default () => (
  <nav className="pt-navbar footer">
    <div className="pt-navbar-group pt-minimal">
      <FilterButton status="ALL" size="small">All</FilterButton>
      <FilterButton status="ACTIVE" size="small">Active</FilterButton>
      <FilterButton status="COMPLETED" size="small">Completed</FilterButton>
    </div>
  </nav>
)
