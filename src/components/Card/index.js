import React, { Component } from 'react'
import Card from './Card'

import './style.scss'

export default class CardComponent extends Component {
  render() {
    return (
      <div className="section-card">
        <Card type="vertical" ratio={5} />
        <Card type="vertical" ratio={3} />
        <Card type="vertical" />
        <Card type="horizontal" ratio={1} />
      </div>
    )
  }
}
