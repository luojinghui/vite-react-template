
import React, { Suspense } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from '../Route/index'

export const App = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Router>
        <Switch>
          {
            routes.map(route => <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>)
          }
        </Switch>
      </Router>
    </Suspense>
  )
}
