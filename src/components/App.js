import React from 'react';
import { Match, HashRouter as Router } from 'react-router';

import Home from '../pages/Home';
import New from '../pages/New';
import View from '../pages/View';

export default () => (
  <Router>
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/new" component={New} />
      <Match exactly pattern="/item/:id" component={View} />
    </div>
  </Router>
);
