import React, { Component } from 'react'
import data from './data.json'
import './App.css'
import ExpandableItem from './components/ExpandableItem';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ul className="grid">
          {data.map((item, idx) => <ExpandableItem key={idx} item={item}/>)}
        </ul>
      </div>
    )
  }
}

export default App
