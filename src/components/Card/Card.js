import React from 'react'

export default props => {
  const stars = []

  for (let i = 0; i < props.ratio; i++) {
    stars.push('active')
  }

  for (let j = 0; j < 5 - props.ratio; j++) {
    stars.push('')
  }

  return (
    <div className={`card-wrapper ${props.type}`}>
      {props.type === 'vertical' ? (
        <div className="card card--vertical">
          <div className="card__thumbnail" />
          <div className="card__top">
            <span className="card__label">label</span>
            <h4 className="card__title">title</h4>
          </div>
          <div className="card__footer">
            {stars.length > 0 ? (
              <ul className="card__star">
                {stars.map((star, index) => {
                  return (
                    <li className={star} key={index}>
                      <button title={`${index + 1}점`} />
                    </li>
                  )
                })}
              </ul>
            ) : (
              ''
            )}
            <p className="card__desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus numquam ex aliquid eius quas necessitatibus amet enim,
              officia ab voluptas dignissimos eligendi voluptatibus recusandae
              porro earum! Ad quis deserunt illo!
            </p>
          </div>
        </div>
      ) : (
        <div className="card card--horizontal">
          <div className="card__thumbnail" />
          <div className="card__content">
            <h4 className="card__title">title5</h4>
            <p className="card__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              perferendis odio sequi, optio officia dolorem molestiae in
              dolorum. Incidunt mollitia velit architecto delectus qui quam
              quaerat magnam veritatis placeat sapiente!
            </p>

            <div className="card__content__bottom">
              {stars.length > 0 ? (
                <ul>
                  {stars.map((star, index) => {
                    return (
                      <li className={star} key={index}>
                        <button title={`${index + 1}점`} />
                      </li>
                    )
                  })}
                </ul>
              ) : (
                ''
              )}
              <div className="card__writer">Writer</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
