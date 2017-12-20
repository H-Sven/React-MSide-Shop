import React from 'react';
import './homeheader.css'

class HomeHeader extends React.PureComponent {
  render() {
    return (
      <div id='home-header' className='clear-fix'>
        <div className='home-header-left float-left '>
          <span>{this.props.cityName}</span>
          &nbsp;
          <i className='anticon icon-down'></i>
        </div>
        <div className='home-header-right float-right'>
          <i className='anticon icon-user'></i>
        </div>
        <div className='home-header-middle'>
          <div className='search-container'>
            <i className='anticon icon-search1'></i>
            <input type='search' placehoder='请输入关键字'/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
