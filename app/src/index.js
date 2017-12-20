import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import MainRouter from './router/mainRouter';
import configStore from './store/configStore'

const store = configStore()

class Root extends React.PureComponent {
  render(){
    return(
      <Provider store={store}>
        <MainRouter/>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
