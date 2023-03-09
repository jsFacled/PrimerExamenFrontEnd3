import React from 'react'

function Card({name, mascota}) {
  return (
    <div>
        <p>Tu nombre es:  {name}</p>
      <p>Tu mascota elegida es:  {mascota}</p>
    </div>
  )
}

export default Card;