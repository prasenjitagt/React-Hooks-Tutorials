//Create the context with {createContext}

//Provide the context with .Provider property 

//Wrap the Parent Component.

//use children prop 

//Use the sent data with useContext Hook.

//Best Trick


import React, { createContext, useContext, useState } from 'react'

const newContext = createContext();

export const useApnaHook = () => useContext(newContext);

const Context = ({children}) => {

    const [count,setCount] = useState(0);

     const inc = () =>{

        setCount(count + 1);

     }

     const dnc = () =>{
        setCount(count - 1);

        
     }

     const data = {count,setCount,inc,dnc};

  return (
    <newContext.Provider value={data}>
        {children}
    </newContext.Provider>
  )
}

export default Context

