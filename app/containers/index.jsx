import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
          initDone: true
        }
    }
    render() {
        return (
            <div>
                {
                  this.state.initDone
                  ? this.props.children : <div>loading!!!!</div>
                }
            </div>
        )
    }
    ComponentDidMount(){
      console.log(this);
      setTimeout(() => {
        that.setState({
          initDone: true
        })
      },1000)
    }
}

export default App
