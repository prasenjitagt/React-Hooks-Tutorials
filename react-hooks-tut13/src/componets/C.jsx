import React, { useContext } from 'react'
import { myContext } from '../App'

const C = () => {

  const {fn,mn,ln} = useContext(myContext);

  return (
    <div>
      {fn} {mn} {ln}
    </div>
  )
}

export default C