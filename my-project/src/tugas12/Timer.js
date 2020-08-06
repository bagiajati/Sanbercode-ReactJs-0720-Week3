import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
      if(this.state.time === 0){
          this.componentWillUnmount()
      }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date()
    });
  }

  render(){
    return(
      <>
        {
          this.state.time > 0 && (
            <>
              <h3 style={{float: "left"}}>
                sekarang jam: {this.state.date.toLocaleTimeString()}
              </h3>
              <h3 style={{float: "right"}}>
                hitung mundur: {this.state.time}
              </h3>
            </>
          )
        }
      </>
    )
  }
}

export default Timer