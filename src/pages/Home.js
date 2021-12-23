// @flow

import React from 'react'

import NavBar from '../components/NavBar'
// import StatusPanel from '../components/StatusPanel'
import List from '../containers/List'

const HomePage = function HomePage() {
  return (
    <div className="display-flex">
      <NavBar showAdd />
      <div className="flex-1">
        <List />
      </div>
      {/* <div>
        <StatusPanel />
      </div> */}
    </div>
  )
}

export default HomePage
