import React from "react"
import {Switch, Route} from "react-router-dom"
import routes from "../../router"

const content = () => {
  return (
    <Switch>
      {/* <Route
        path={"/"}
        render={() => (
          <Home />
        )}
      /> */}
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} />
      )}
    />
  )
}

export default content