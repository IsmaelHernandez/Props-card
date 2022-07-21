import React from 'react'
//obtenemos la prop
const Card = ({objInfo, nameClass}) => {

  
  return (
    <ul className={`list ${nameClass}`}>
      <h2 className='title-card'>{objInfo.title}</h2>
      <li className='list__item'>{objInfo.list[0]}</li>
      <li className='list__item'>{objInfo.list[1]}</li>
      <li className='list__item'>{objInfo.list[2]}</li>
      <li className='list__item'>{objInfo.list[3]}</li>
    </ul>
  )
}

export default Card