import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import { Signin } from './components/core/Signin'
import { Signup } from './components/core/Signup'

export const Routes = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/shop" component={Shop}/>
            <Route path="/signin" component={Signin} exact/>
            <Route path="/signup" component={Signup} exact/>
        </Switch>
    </HashRouter>
  )
}
