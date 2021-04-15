import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Recharges from './pages/Recharges';

export default function Routes(){
    return (
      <Router>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/recharges" exact component={Recharges} />
        </Switch>
      </Router>
    )
}