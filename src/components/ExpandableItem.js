import React, { Component } from 'react'
import './ExpandableItem.css'

export default class ExpandableItem extends Component {
  render() {

    const details = item => (
      <div className="expanded">
        {item.description}
      </div>)

    return (
      <li className={this.props.isToggledOn ? 'toggledOn' : null}
          onClick={this.props.onClick}
      >
        <div className="content">
          {this.props.item.name}
        </div>
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