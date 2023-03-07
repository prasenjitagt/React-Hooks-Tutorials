import React, { useEffect, useState } from 'react'

const DependentEffect = () => {
    const [Count1,SetCount1] = useState(0);
    const [Count2,SetCount2] = useState(0);
    const [Count3,SetCount3] = useState(0);

    useEffect(()=>{
      if (Count1>=Count3) {
        document.title=Count1
      }
      else{
        document.title=Count3
      }
},[Count1,Count3])

  return (
    <div>
        <button onClick={()=>{SetCount1(Count1+1)}}>Count1:{Count1}</button>

        <button onClick={()=>{SetCount2(Count2+1)}}>Count2:{Count2}</button>
          
        <button onClick={()=>{SetCount3(Count3+1)}}>Count3:{Count3}</button>
    </div>
  )
}

export default DependentEffect