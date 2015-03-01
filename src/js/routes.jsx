import React from 'react/addons'
import Router from 'react-router'

import App from './app.jsx'
import Home from './views/pages/home.jsx'
import Portfolio from './views/pages/portfolio.jsx'
import HealthFitness from './views/pages/healthfitness.jsx'
import Mindfulness from './views/pages/mindfulness.jsx'
import Chess from './views/pages/chess.jsx'
import Background from './views/pages/mybackground.jsx'

const { DefaultRoute, Route } = Router;

export default (
    <Route path="/index.html" handler={App}>
      <DefaultRoute name="home" handler={Home} />
      <Route name="background" handler={Background} />
      <Route name="portfolio" handler={Portfolio} />
      <Route name="healthfitness" handler={HealthFitness} />
      <Route name="mindfulness" handler={Mindfulness} />
      <Route name="chess" handler={Chess} />
    </Route>
)
