import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import IndexRouter from './router/indexRouter';
import configStore from './store/configStore'
import './static/css/common.css'
import './static/icons/iconfont.css'

const store = configStore()

class Root extends React.PureComponent {
  render(){
    return(
      <Provider store={store}>
        <IndexRouter/>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
