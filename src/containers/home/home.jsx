import React from 'react'
import HomeHeader from '../../component/homeheader/homeheader'
import CateGory from '../../component/category/category'
import { connect } from 'react-redux'

@connect(
  state=>state
)

class Home extends React.Component {
  render(){
    return(
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}/>
        <CateGory/>
      </div>
    )
  }
}

export default Home
