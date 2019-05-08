import React, { Component } from 'react'
import Input from './Input'

import './style.scss'

export default class InputComponent extends Component {
  state = {
    _maxLength: 500, // 최대 길이 input을 위한 값
    maxLength: 500, // 실제 최대 길이 적용 값
    inputs: [
      {
        value: '',
        disabled: false,
        readOnly: false,
        hasButton: false
      },
      {
        value: '',
        disabled: false,
        readOnly: false,
        hasButton: true
      },
      {
        value: '',
        disabled: true,
        readOnly: false,
        hasButton: false
      },
      {
        value: '',
        disabled: false,
        readOnly: true,
        hasButton: false
      }
    ]
  }

  handleChange = e => {
    const state = { ...this.state }

    switch (e.target.name) {
      default:
        state[e.target.name] = e.target.value
        break
    }

    this.setState(state)
  }

  handleChangeForInput = (e, index) => {
    const inputs = [...this.state.inputs]

    switch (e.target.name) {
      default:
        inputs[index][e.target.name] = e.target.value
        break
    }

    this.setState({ inputs })
  }

  setMaxLength = () => {
    this.setState({
      maxLength: this.state._maxLength
    })
  }

  render() {
    const { _maxLength, maxLength, inputs } = this.state

    return (
      <div className="section-input">
        <label className="hidden" htmlFor="max-length">
          최대 길이를 입력해주세요.
        </label>
        <input
          type="text"
          id="max-length"
          name="_maxLength"
          value={_maxLength}
          onChange={this.handleChange}
          placeholder="최대 길이 설정"
        />
        <button onClick={this.setMaxLength}>Set</button>

        {inputs.map((input, index) => {
          return (
            <Input
              key={index}
              index={index}
              input={input}
              maxLength={maxLength}
              handleChangeForInput={this.handleChangeForInput}
            />
          )
        })}
      </div>
    )
  }
}
