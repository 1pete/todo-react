import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'

import { CssBaseline } from '@material-ui/core'

import Home from '../pages/Home'
import New from '../pages/New'
import View from '../pages/View'

const App = function App() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={New} />
        <Route exact path="/item/:id" component={View} />
      </div>
    </Router>
  )
}

export default App
