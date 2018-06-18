import React, { Component } from 'react'

export default class ExpandableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <li 
      className={this.state.isToggleOn ? 'toggledOn': null}
        onClick={this.handleClick}
      >
        {this.props.item.name}
      </li>
    );
  }
}

ExpandableItem.defaultProps = {
  item: {}
};