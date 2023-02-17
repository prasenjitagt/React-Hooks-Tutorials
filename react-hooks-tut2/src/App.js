import React from "react";
import './App.css'
import ClassCounter from "./componets/classCounter";
import HookCounter from "./componets/hookCounter";
import PrevHook from "./componets/PrevHook";
import PrevClass from "./componets/PrevClass";
function App() {
  return (
    <div className="container">
      useState Hook
      {/* <ClassCounter/>
      <HookCounter/> */}
      <PrevHook/>
      <PrevClass/>
    </div>
  );
}

export default App;
