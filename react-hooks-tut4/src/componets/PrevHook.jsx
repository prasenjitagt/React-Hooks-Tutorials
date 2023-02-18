import React, { useState } from "react";

function PrevHook() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const increment5 = () =>{
    for(let i = 0 ; i<5 ; i++){
        setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      Count : {count}
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
      <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      </div>
      <div>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      </div>
      <div>
        <button onClick={increment5}>IncrementFive</button>
      </div>
    </div>
  );
}

export default PrevHook;
