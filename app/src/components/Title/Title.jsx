import React from 'react'

function Title({text, textColor}) {

  return (
    <h1 style={{color:textColor}}>{text}</h1>
  )
}

export default Title