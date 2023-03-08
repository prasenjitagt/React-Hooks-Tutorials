import React, { useEffect, useState } from 'react'

const EffectTut = () => {
const[data,setData] = useState("Click A Button");
useEffect(()=>{
  console.log("DOM Updated");
  //It is equivalent to componentDidMount
},[])
  return (
    <div>
        <button onClick={()=>{setData("First")}}>First</button>
        <button onClick={()=>{setData("Second")}}>Second</button>
        <br/>
        {data}
    </div>
  )
}

export default EffectTut