import React, { Component } from 'react'

export default class Input extends Component {
  state = {
    isFocus: false
  }

  focusTextarea = value => {
    this.setState({
      isFocus: value
    })
  }

  render() {
    const { index, input, maxLength, handleChangeForInput } = this.props
    const { isFocus } = this.state

    let realValue = input.value
    if (input.value.length > maxLength) {
      realValue = input.value.slice(0, maxLength)
    }

    return (
      <div className="input__wrapper">
        <div
          className={`input ${input.hasButton ? 'has-button' : ''} ${
            isFocus || input.value.length > 0 ? 'focus' : ''
          } ${input.disabled ? 'disabled' : ''} ${
            input.readOnly ? 'read-only' : ''
          }`}
        >
          <label className="hidden" htmlFor={`input-${index}`}>
            주문 요청사항을 입력해주세요.
          </label>
          <textarea
            id={`input-${index}`}
            name="value"
            value={realValue}
            disabled={input.disabled}
            readOnly={input.readOnly}
            maxLength={maxLength}
            onFocus={() => this.focusTextarea(true)}
            onBlur={() => this.focusTextarea(false)}
            onChange={e => handleChangeForInput(e, index)}
            placeholder="주문 요청사항을 입력해주세요."
          />
          <div className="max-length">{maxLength - realValue.length}</div>
        </div>
        {input.hasButton ? (
          <button disabled={!realValue.length}>Save</button>
        ) : (
          ''
        )}
      </div>
    )
  }
}
