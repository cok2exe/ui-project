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
            value={input.value}
            disabled={input.disabled}
            readOnly={input.readOnly}
            maxLength={maxLength}
            onFocus={() => this.focusTextarea(true)}
            onBlur={() => this.focusTextarea(false)}
            onChange={e => handleChangeForInput(e, index)}
            placeholder="주문 요청사항을 입력해주세요."
          />
          <div className="max-length">{maxLength - input.value.length}</div>
        </div>
        {input.hasButton ? (
          <button disabled={!input.value.length}>Save</button>
        ) : (
          ''
        )}
      </div>
    )
  }
}
