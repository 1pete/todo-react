// @flow

import React from 'react'

import FilterButton from '../containers/FilterButton'

const createButton = (status, text) =>
  <FilterButton status={status} size="small">{text}</FilterButton>

export default function StatusPanel() {
  return (
    <nav className="pt-navbar footer">
      <div className="pt-navbar-group pt-minimal">
        {createButton('ALL', 'all')}
        {createButton('ACTIVE', 'Active')}
        {createButton('COMPLETED', 'Completed')}
      </div>
    </nav>
  )
}
