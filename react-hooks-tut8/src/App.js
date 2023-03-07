import React from "react";
import "./App.css";
import DependentEffect from "./componets/DependentEffect";
import EffectTut from "./componets/EffectTut";
import Timer from "./componets/Timer";
function App() {
  return (
    <div className="container">
      useEffect (Effect CleanUp)
     {/* <EffectTut/> */}
     {/* <DependentEffect/> */}
     <Timer/>
    </div>
  );
}

export default App;
