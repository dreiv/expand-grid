import React, { Component } from 'react'

export default class ExpandableItem extends Component {
  render() {
    return (
      <li className={this.props.isToggledOn ? 'toggledOn' : null}
          onClick={this.props.onClick}>
        {this.props.item.name}
      </li>
    );
  }
}

ExpandableItem.defaultProps = {
  item: {},
  isToggledOn: false,
  onClick: () => {}
};