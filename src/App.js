import React, { Component } from 'react'
import data from './data.json'
import './App.css'

class App extends Component {

  handleClick() {
    console.log('Click happened');
  }

  renderItem = (item, idx) => <li key={idx} onClick={this.handleClick}>{item.name}</li>

  render() {

    return (
      <div className="App">
        <ul className="grid">
          {data.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

export default App
