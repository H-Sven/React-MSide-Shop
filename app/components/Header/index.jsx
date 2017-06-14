import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import '../../static/css/mui.min.css'

class Header extends React.Component {
  constructor(props,context) {
      super(props,context;
      this.shouldCompontUpdate = PureRenderMixin.shouldCompontUpdate
  }
  render(){
    return(
      <div>
        <span onClick={this.clickHandle}>back</span>
        <h1>{this,props.title}</h1>
      </div>
    )
  }
  clickHandle(){
    windows.history.back
  }
}

export default Header
