import React from "react";
import "./App.css";
import DependentEffect from "./componets/DependentEffect";
import EffectTut from "./componets/EffectTut";
function App() {
  return (
    <div className="container">
      useEffect (Dependency List)
     {/* <EffectTut/> */}
     <DependentEffect/>
    </div>
  );
}

export default App;
