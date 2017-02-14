import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'

import Home from '../pages/Home'
import New from '../pages/New'
import View from '../pages/View'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/item/:id" component={View} />
    </div>
  </Router>
)
