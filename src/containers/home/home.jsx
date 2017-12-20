import React from 'react'
import HomeHeader from '../../component/homeheader/homeheader'
import { connect } from 'react-redux'

@connect(
  state=>state
)

class Home extends React.Component {
  render(){
    return(
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}/>
        <div>主页</div>
      </div>
    )
  }
}

export default Home
