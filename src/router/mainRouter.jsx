import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import IndexRouter from './indexRouter'

class MainRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={IndexRouter}/>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
