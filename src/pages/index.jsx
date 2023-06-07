import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Maze from './maze/Maze'
import Won from './won/Won'
import Lost from './lost/Lost'

const navigate = (page) => {
  window.location = `/?route=${page}`
}

const Page = () => (
  <Switch>
    <Route path="/maze">
      <Maze />
    </Route>
    <Route path="/won">
      <Won />
    </Route>
    <Route path="/lost">
      <Lost />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)

export { navigate }
export default Page
