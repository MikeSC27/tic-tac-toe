import React from 'react'
import  "../App.css";
function Square({value, pickSquare}) {
  return (
    <div className="square" onClick={pickSquare}>
        {value}
    </div>
  )
}

export default Square