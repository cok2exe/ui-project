import React, { Component } from 'react'

import CardComponent from './Card'
import InputComponent from './Input'

export default class Main extends Component {
  state = {
    selectedTab: 'card'
  }

  selectUiTab = selectedTab => {
    this.setState({
      selectedTab
    })
  }

  render() {
    const { selectedTab } = this.state

    return (
      <div className="main-body">
        <ul className="main-tabs">
          <li onClick={() => this.selectUiTab('card')}>CARD UI</li>
          <li onClick={() => this.selectUiTab('input')}>입력 폼 UI</li>
        </ul>

        {selectedTab === 'card' ? <CardComponent /> : <InputComponent />}
      </div>
    )
  }
}
