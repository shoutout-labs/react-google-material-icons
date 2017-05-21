import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })
   it('renders title', () => {
    expect(render(<h1>react-google-material-icons Demo</h1>))
      .toContain('<h1>react-google-material-icons Demo</h1>')
  })

   it('renders a icon with type="i"', () => {
    expect(render(<MaterialIcon icon="account_box"/>))
      .toContain('<i class="material-icons" style="font-size: 24px;">account_box</i>')
  })
})
