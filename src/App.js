import React, { Component } from 'react';
import './App.css';

import Buttons from './Components/CalcButtons';
import Result from './Components/CalcResult';

class App extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    result: ''
  }

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      })
    }
    catch (e) {
      this.setState({
        result: 'Error'
      })
    }
  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  clickHandler = button => {
    if (button === '=') {
      this.calculate()
    }
    else if (button === 'AC') {
      this.reset()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  render() {
    return (
      <div className="app-container">
        <Result result={this.state.result} />
        <Buttons clicked={this.clickHandler} />
      </div>
    )
  }
}

export default App;
