import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer] = useState(0);

    const tick = () => {
        setTimer(timer + 1)
    }

    useEffect(()=>{
        console.log("Lets see");
        const memoryLeak = setInterval(tick,1000)

        return  () =>{
            clearInterval(memoryLeak)
        }
    })

  return (
    <div>{timer}</div>
  )
}

export default Timer