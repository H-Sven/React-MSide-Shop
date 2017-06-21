import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const styleComponentsidebar = {
        bar1: {
          visibility: "visible",
          transform: "translate3d(0px, 0px, 0px)"
        },
        bar2: {
          transform: "translate3d(0px, 0px, 0px) translateZ(0px)"
        }
        bar3: {
          transition-duration: "0ms",
          display: "block",
          height: "494px",
          transform: "translate3d(0px, 0px, 0px) translateZ(0px)"
        }
      }
        return (
            <div>
            <aside id="offCanvasSide" className="mui-off-canvas-left bakc-eee mui-transitioning mui-active" style={styleComponentsidebar.bar1}>
              <div id="offCanvasSideScroll" className="mui-scroll-wrapper" data-scroll="2">
                <div className="mui-scroll"  style={styleComponentsidebar.bar2}>
                  <ul className="mui-table-view nmg">
                    <li className="mui-table-view-cell mui-media">
                      <a href="javascript:void(0);">
                        <div className="mui-media-object mui-pull-left radius50" src="../images/Default-Avatar.jpg"></div>
                          <div className="mui-media-body margin-t12">
                            <p className="font14 font-weight font-color-3">Rttmall@foxmail.com</p>
                            <p className="iconfont icon-vip "><span className="font12 font-color-9">Membership</span></p>
                          </div>
                      </a>
                    </li>
                  </ul>
                  <ul className="mui-table-view margin-t12">
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-icon font18 mar-right font-color-9 mui-pull-left"></s>Home</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-fenlei font18 mar-right font-color-9 mui-pull-left"></s>Categories</a>
                    </li>
                  </ul>
                  <ul className="mui-table-view margin-t12">
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-ren font18 mar-right font-color-9 mui-pull-left"></s>My Account</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-gouwuche2 font18 mar-right font-color-9 mui-pull-left"></s>Cart</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-icon17 font18 mar-right font-color-9 mui-pull-left"></s>My Orders</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-xinyuandan font18 mar-right font-color-9 mui-pull-left"></s>Wish List</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-youhuiquan font18 mar-right font-color-9 mui-pull-left"></s>My Coupons</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-lingdang font18 mar-right font-color-9 mui-pull-left"></s>My Messages</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-qipao font18 mar-right font-color-9 mui-pull-left"></s>Leave Feedback</a>
                    </li>
                  </ul>
                  <ul className="mui-table-view margin-t12">
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-liulanlishi font18 mar-right font-color-9 mui-pull-left"></s>Recently Viewed Items</a>
                    </li>
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-fenxiang font18 mar-right font-color-9 mui-pull-left"></s>Invite Friends</a>
                    </li>
                  </ul>
                  <ul className="mui-table-view margin-t12">
                    <li className="mui-table-view-cell height44">
                      <a className=""><s className="iconfont icon-shezhi font18 mar-right font-color-9 mui-pull-left"></s>Settings</a>
                    </li>
                  </ul>
                  </div>
                  <div className="mui-scrollbar mui-scrollbar-vertical">
                    <div className="mui-scrollbar-indicator" style={styleComponentsidebar.bar3} ></div>
                  </div>
                </div>
            </aside>
            </div>
        )
    }

}

export default SideBar
