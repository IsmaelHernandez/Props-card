import React from 'react'

function Texto({textClass}) {
  return (
    <div className='container'>
        <p className={`${textClass}`}>Hola isma soy un componente</p>
    </div>
  )
}

export default Texto