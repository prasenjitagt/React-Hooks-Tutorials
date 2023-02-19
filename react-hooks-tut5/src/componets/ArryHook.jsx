import React, { useState } from 'react'

function ArryHook() {
    const arr = [];

    const [item,setItem] = useState(arr);

    const addItem = () => {
        setItem([
            ...item,
            Math.floor(Math.random()*10 + 1)
        ])
    }




  return (
    <div>
        <button onClick={addItem}>Click Me</button>
        {item.map(elem => (<div>{elem}</div>))}



    </div>
  )
}

export default ArryHook