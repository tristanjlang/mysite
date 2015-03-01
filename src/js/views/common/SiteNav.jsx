import React from 'react'

import {Home, Background, Portfolio, HealthFitness, Mindfulness, Chess} from '../../components/LinkTo.jsx'
import NavBar from '../../components/NavBar.jsx'

export default React.createClass({
  render: () => (
      <NavBar>
        <ul>
          <li><Home /></li>
          <li><Background /></li>
          <li><Portfolio /></li>
          <li><HealthFitness /></li>
          <li><Mindfulness /></li>
          <li><Chess /></li>
        </ul>
      </NavBar>
    )
})
