import React, { Component } from 'react'

export default class Card extends Component {
  state = {
    currentStarValue: 0
  }

  enterOnStar = val => {
    this.setState({
      currentStarValue: val
    })
  }

  outOnStar = () => {
    this.setState({
      currentStarValue: 0
    })
  }

  render() {
    const stars = []
    const { currentStarValue } = this.state
    const { index, card, clickOnStar } = this.props

    let target = 0
    if (currentStarValue) {
      target = currentStarValue
    } else {
      target = card.ratio
    }

    for (let i = 0; i < target; i++) {
      stars.push('active')
    }

    for (let j = 0; j < 5 - target; j++) {
      stars.push('')
    }

    return (
      <div className={`card-wrapper ${card.type}`}>
        {card.type === 'vertical' ? (
          <div className="card card--vertical">
            <div
              className="card__thumbnail"
              style={{ backgroundImage: `url(${card.thumbnail})` }}
            />
            <div className="card__top">
              <span className="card__label">label</span>
              <h4 className="card__title">{card.title}</h4>
              <div className="card__writer">{card.writer}</div>
            </div>

            {card.ratio || card.desc ? (
              <div className="card__footer">
                {card.ratio > 0 && stars.length > 0 ? (
                  <ul className="card__star">
                    {stars.map((star, starIdx) => {
                      return (
                        <li className={star} key={starIdx}>
                          <button
                            onMouseEnter={() => this.enterOnStar(starIdx + 1)}
                            onMouseLeave={this.outOnStar}
                            onClick={() => clickOnStar(currentStarValue, index)}
                          >
                            <span>{starIdx + 1}점</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  ''
                )}
                <p className="card__desc">{card.desc}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          <div className="card card--horizontal">
            <div
              className="card__thumbnail"
              style={{ backgroundImage: `url(${card.thumbnail})` }}
            />
            <div className="card__content">
              <h4 className="card__title">{card.title}</h4>
              <p className="card__desc">{card.desc}</p>

              <div className="card__content__bottom">
                {stars.length > 0 ? (
                  <ul>
                    {stars.map((star, starIdx) => {
                      return (
                        <li className={star} key={starIdx}>
                          <button
                            onMouseEnter={() => this.enterOnStar(starIdx + 1)}
                            onMouseLeave={this.outOnStar}
                            onClick={() => clickOnStar(currentStarValue, index)}
                          >
                            <span>{starIdx + 1}점</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  ''
                )}
                <div className="card__writer">{card.writer}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
