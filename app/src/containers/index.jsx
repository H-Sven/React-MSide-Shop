import React from 'react'
import {getItem} from '../static/utils'
import {connect} from 'react-redux'
import {update} from '../action/userinfo.redux'

@connect(
  state=>state,
  {update}
)

class Index extends React.PureComponent{
  constructor() {
    super()
    this.state = {
      initDone: false
    }
  }
  render(){
    console.log(this.state.initDone);
    return(
      <div>
       {
         this.state.initDone
         ? this.props.children
         : <div>正在加载中...</div>
       }
      </div>
    )
  }
  componentDidMount() {
        // 获取位置信息
        let cityName = getItem('CITYNAME')
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.update({
            cityName: cityName
        })
        // 更改状态
        this.setState({
            initDone: true
        })
        console.log(cityName);
  }
}

export default Index
