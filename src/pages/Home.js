import React from 'react'

import NavBar from '../components/NavBar'
import StatusPanel from '../components/StatusPanel'
import VisibleItems from '../containers/VisibleItems'

const HomePage = () => (
  <div className="display-flex">
    <NavBar showAdd />
    <div className="flex-1"><VisibleItems /></div>
    <div><StatusPanel /></div>
  </div>
)

export default HomePage
