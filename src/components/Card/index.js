import React, { Component } from 'react'
import Card from './Card'

import './style.scss'

export default class CardComponent extends Component {
  state = {
    cards: [
      {
        title: 'Card 1',
        label: 'test test',
        desc:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus numquam ex aliquid eius quas necessitatibus amet enim, officia ab voluptas dignissimos eligendi voluptatibus recusandae porro earum! Ad quis deserunt illo!',
        type: 'vertical',
        ratio: 5,
        writer: 'Writer',
        thumbnail: '/images/overaction-1.jpg'
      },
      {
        title: 'Card 2',
        label: 'test',
        desc:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus numquam ex aliquid eius quas necessitatibus amet enim, officia ab voluptas dignissimos eligendi voluptatibus recusandae porro earum! Ad quis deserunt illo!',
        type: 'vertical',
        ratio: 3,
        writer: 'Writer',
        thumbnail: '/images/overaction-2.jpg'
      },
      {
        title: 'Card 3',
        label: 'test33',
        desc: 'test description',
        type: 'vertical',
        ratio: 0,
        writer: 'Writer',
        thumbnail: '/images/overaction-3.jpg'
      },
      {
        title: 'Card 4',
        desc:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus numquam ex aliquid eius quas necessitatibus amet enim, officia ab voluptas dignissimos eligendi voluptatibus recusandae porro earum! Ad quis deserunt illo!',
        type: 'horizontal',
        ratio: 1,
        writer: 'Writer',
        thumbnail: '/images/overaction-2.jpg'
      }
    ]
  }

  clickOnStar = (starValue, index) => {
    const cards = [...this.state.cards]

    if (starValue && !isNaN(index)) {
      cards[index].ratio = starValue

      alert('별점 등록이 완료되었습니다 :)')
    }

    this.setState({ cards })
  }

  render() {
    const { cards } = this.state
    return (
      <div className="section-card">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              index={index}
              card={card}
              clickOnStar={this.clickOnStar}
            />
          )
        })}
      </div>
    )
  }
}
