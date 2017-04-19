import React from 'react'
import './styles.css';
export default React.createClass({
  render() {
    return  <i className="material-icons"
                      style={{fontSize: this.props.size ? this.props.size : 24}} {...props}>{this.props.icon}</i>;
  }
})
