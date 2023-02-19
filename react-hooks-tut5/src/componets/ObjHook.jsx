import React, { useState } from 'react'

function ObjHook() {
    const obj = {
        firstName: "",
        lastName: ''
    }

    const [details, setDetails] =  useState(obj);

    const handleFName = (e) => {
        setDetails({
            ...details,
            firstName:e.target.value
        })
    }

    const handleLName = (e) => {
        setDetails({
            ...details,
            lastName:e.target.value
        })
    }

  return (
    <div>
        <input onChange={handleFName} type="text" placeholder='F Name' />
        <input onChange={handleLName} type="text" placeholder='L Name' />
        <div>Hello: {details.firstName} {details.lastName}</div>




    </div>
  )
}

export default ObjHook