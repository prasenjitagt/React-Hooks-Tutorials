import React, { useEffect, useRef, useState } from 'react'

function StopTimer() {

  const [timer,setTimer] = useState(0);

    // We can access the referenced (useRef) item any where in the coding page
    
    const myRef = useRef(null);


    useEffect(()=>{

      myRef.current = setInterval(()=>{
        setTimer(timer + 1);
      },1000);


      return () => {
        clearInterval(myRef.current);
      }

    })

  
    const hclick = () =>{

      clearInterval(myRef.current);
    }


    

  return (
    <div className='container'>
      <div>{timer}</div>

      <button onClick={hclick}>Stop</button>

    </div>
  )
}

export default StopTimer