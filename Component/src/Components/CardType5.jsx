import React from 'react'

import { CardInfo5 } from '../const/CardInfo5'

export function CardType5 () {
  return (
    <div className='BigContainerCardType5'>
      {CardInfo5.map(({ img, Title, id }) => {
        return (
          <div key={id} className='ContainerImgCardType5'>
            <img style={{ width: '600px', height: '389px' }} src={img} alt='card' />
            <h4 className='TitleCardType5'>{Title}</h4>
          </div>
        )
      })}
    </div>
  )
}