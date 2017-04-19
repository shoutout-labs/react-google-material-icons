import React from 'react'
import {render} from 'react-dom'

import MaterialIcon from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-google-material-icons Demo</h1>
      <MaterialIcon icon="account_box"/>
      <MaterialIcon icon="account_box" size={36}/>
      <MaterialIcon icon="account_box" size={64}/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
