import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './ExpandableItem.css'

export default class ExpandableItem extends Component {
	componentDidUpdate = () => {
		const focusNode = ReactDOM.findDOMNode(this.refs.expanded)
		if (focusNode) {
      focusNode.scrollIntoView({behavior: "smooth", block: "center"})
		}
	};

  render() {

    const details = item => (
      <div className="expanded" ref="expanded">
        {item.description}
      </div>)

    return (
      <li className={this.props.isToggledOn ? 'toggledOn' : null}>
        <div className="content" onClick={this.props.onClick}>
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