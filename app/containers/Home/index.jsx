import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import SideBar from '../../components/SideBar'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
        <div id="offCanvasWrapper" className="mui-off-canvas-wrap mui-draggable mui-slide-in mui-active">
          <SideBar/>
          <div className="mui-inner-wrap">
            <HomeHeader/>
            <div className="mui-content">
              <h1>!!!!</h1>
              <div id="move-togger"></div>
            </div>
          </div>
        </div>
    )
  }

}

export default Home
