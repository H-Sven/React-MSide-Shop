import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import SideBar from '../../components/SideBar'

class Brand extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SideBar/>
                <HomeHeader/>
                <div className="mui-content">
                  <h1>zhangjianan</h1>
                </div>
            </div>
        )
    }
}

export default Brand
