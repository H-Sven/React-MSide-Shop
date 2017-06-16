import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              <aside id="offCanvasSide" className="mui-off-canvas-left bakc-eee">
                <div id="offCanvasSideScroll" className="mui-scroll-wrapper">
                  <div className="mui-scroll">
                    <ul className="mui-table-view nmg">
                      <li className="mui-table-view-cell mui-media">
                        <a href="javascript:void(0);">
                          <div className="mui-media-object mui-pull-left radius50" src="../../static/images/Default-Avatar.jpg" ></div>
                            <div className="mui-media-body margin-t12">
                              <p className="font14 font-weight font-color-3">Rttmall@foxmail.com</p>
                              <p className="iconfont icon-vip ">
                                <span className="font12 font-color-9">Membership</span>
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul className="mui-table-view margin-t12">
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-icon font18 margin-r10 font-color-9 mui-pull-left"></s>Home</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-fenlei font18 margin-r10 font-color-9 mui-pull-left"></s>Categories</a>
                        </li>
                      </ul>
                      <ul className="mui-table-view margin-t12">
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-ren font18 margin-r10 font-color-9 mui-pull-left"></s>My Account</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-gouwuche2 font18 margin-r10 font-color-9 mui-pull-left"></s>Cart</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-icon17 font18 margin-r10 font-color-9 mui-pull-left"></s>My Orders</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-xinyuandan font18 margin-r10 font-color-9 mui-pull-left"></s>Wish List</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-youhuiquan font18 margin-r10 font-color-9 mui-pull-left"></s>My Coupons</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-lingdang font18 margin-r10 font-color-9 mui-pull-left"></s>My Messages</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-qipao font18 margin-r10 font-color-9 mui-pull-left"></s>Leave Feedback</a>
                        </li>
                      </ul>
                      <ul className="mui-table-view margin-t12">
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-liulanlishi font18 margin-r10 font-color-9 mui-pull-left"></s>Recently Viewed Items</a>
                        </li>
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-fenxiang font18 margin-r10 font-color-9 mui-pull-left"></s>Invite Friends</a>
                        </li>
                      </ul>
                      <ul className="mui-table-view margin-t12">
                        <li className="mui-table-view-cell height44">
                          <a className="">
                            <s className="iconfont icon-shezhi font18 margin-r10 font-color-9 mui-pull-left"></s>Settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
            </div>
        )
    }

}

export default SideBar
