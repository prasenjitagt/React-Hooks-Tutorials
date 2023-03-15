import React, { useState, useEffect, useRef } from "react";

const Render = () => {
  const [btnCnt, setBtnCnt] = useState(0);

  // const [renderCount, setRenderCount] = useState(0);

  // Returns a mutable variable updating which will not reRender the DOM

  const myRef = useRef(0);
  


  useEffect(() => {
    // setRenderCount(renderCount + 1);

    myRef.current = myRef.current + 1; 
  });

  return (
    <div className="container">
      <br />
      DOM rendered {myRef.current} times
      <br />
      <button 
      onClick={() => {setBtnCnt((p) => p + 1);}}
      >

      Clicked: {btnCnt} times

      </button>
    </div>
  );
};

export default Render;
