import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {

    return (
          <div className="mui-bar mui-bar-nav">
            <span className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></span>
            <div className="nav-input radius4">
              <span className="iconfont icon-sousuo font18 mui-pull-left"></span>
              <input placeholder="I'm looking for" type="text" className="nback nborder nmg npd"/>
            </div>
          </div>
    )
  }
}

export default HomeHeader
