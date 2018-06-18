import React, { Component } from 'react'

export default class ExpandableItem extends Component {
  render() {

    const details = item => <div>{item.description}</div>

    return (
      <li className={this.props.isToggledOn ? 'toggledOn' : null}
          onClick={this.props.onClick}
      >
        {this.props.item.name}
        {this.props.isToggledOn && details(this.props.item)}
      </li>
    );
  }
}

ExpandableItem.defaultProps = {
  item: {},
  isToggledOn: false,
  onClick: () => {}
};