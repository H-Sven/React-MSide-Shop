import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Index from '../containers/index'
import Home from '../containers/home/home'
import NotFound from '../component/NotFound/NotFound';

class IndexRouter extends React.PureComponent {
  render() {
    return (
    <BrowserRouter>
      <Index>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Index>
    </BrowserRouter>)
  }
}

export default IndexRouter
