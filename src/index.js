import React from 'react'
import './main.css';
export default React.createClass({
  render() {
    return  <i className="material-icons"
                      style={{fontSize: this.props.size||24}}>{this.props.icon}</i>;
  }
})
