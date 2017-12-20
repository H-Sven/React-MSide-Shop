import React from 'react'
import ReactSwipe from 'react-swipe'
import './category.css'

class CateGory extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  render() {
    const opt = {
      auto: 3000,
      callback: function(index) {
        this.setState({index: index})
      }.bind(this)
    }
    return (<div>
      <ReactSwipe className="carousel" swipeOptions={opt}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <div>
        <ul>
         <li className={this.state.index === 0 ? 'select' : ''}>1</li>
         <li className={this.state.index === 1 ? 'select' : ''}>2</li>
         <li className={this.state.index === 2 ? 'select' : ''}>3</li>
        </ul>
      </div>
    </div>)
  }
}

export default CateGory
