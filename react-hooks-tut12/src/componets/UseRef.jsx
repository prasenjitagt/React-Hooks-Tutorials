import React, { useEffect, useRef } from "react"

const UseRef = () => {

    //useState,useEffect,useRef

    //DOM Manipulation

    const myRef = useRef(null);
    // console.log(typeof(myRef));
    // console.log(myRef.current);
    console.log(myRef);
    useEffect(()=>{
        const inpt = myRef.current;
        
        inpt.focus();

        //styles
        inpt.style.backgroundColor = "Black";
        inpt.style.color = "white";



    })
    

  return (
    <div>

    <input ref={myRef} type="text" />
    </div>
  )
}

export default UseRef