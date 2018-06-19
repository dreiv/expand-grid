import React, { Component } from 'react'
import data from './data.json'
import './App.css'
import ExpandableItem from './components/ExpandableItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: -1};
  }

  render() {
    const handleClick = idx => this.setState(prevState => ({
      activeIndex: prevState.activeIndex !== idx ? idx : -1
    }));

    return (
      <ul className="App">
          {data.map((item, idx) => (
            <ExpandableItem 
              key={idx} 
              item={item}
              isToggledOn={idx === this.state.activeIndex}
              onClick={() => handleClick(idx)}/>
            ))}
      </ul>
    )
  }
}

export default App
