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
        <div id="offCanvasWrapper" className="mui-off-canvas-wrap mui-draggable mui-slide-in">
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
  shouldComponentUpdate(){
    console.log(update);
    mui.init();
    //侧滑容器父节点
    var offCanvasWrapper = mui('#offCanvasWrapper');
    //主界面容器
    var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
    //菜单容器
    var offCanvasSide = document.getElementById("offCanvasSide");
    if (!mui.os.android) {
      document.getElementById("move-togger").classList.remove('mui-hidden');
      var spans = document.querySelectorAll('.android-only');
      for (var i = 0, len = spans.length; i < len; i++) {
        spans[i].style.display = "none";
      }
    }
    //移动效果是否为整体移动
    var moveTogether = false;
    //侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
    var classList = offCanvasWrapper[0].classList;
    //变换侧滑动画移动效果；
    mui('.mui-input-group').on('change', 'input', function() {
      if (this.checked) {
        offCanvasSide.classList.remove('mui-transitioning');
        offCanvasSide.setAttribute('style', '');
        classList.remove('mui-slide-in');
        classList.remove('mui-scalable');
        switch (this.value) {
          case 'main-move':
            if (moveTogether) {
              //仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
              offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
            }
            break;
          case 'main-move-scalable':
            if (moveTogether) {
              //仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
              offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
            }
            classList.add('mui-scalable');
            break;
          case 'menu-move':
            classList.add('mui-slide-in');
            break;
          case 'all-move':
            moveTogether = true;
            //整体滑动时，侧滑菜单在inner-wrap内
            offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
            break;
        }
        offCanvasWrapper.offCanvas().refresh();
      }
    });
    mui('#offCanvasSideScroll').scroll();
    mui('#offCanvasContentScroll').scroll();
    //实现ios平台原生侧滑关闭页面；
    if (mui.os.plus && mui.os.ios) {
      mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
        plus.webview.currentWebview().setStyle({'popGesture': 'none'});
      });
    }

  }

}

export default Home
