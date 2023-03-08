import React from "react";
import "./App.css";
import DataFetchEffect from "./componets/DataFetchEffect";
import DependentEffect from "./componets/DependentEffect";
import EffectTut from "./componets/EffectTut";
import Timer from "./componets/Timer";
function App() {
  return (
    <div className="container">
      useEffect (Data Fetching)
     {/* <EffectTut/> */}
     {/* <DependentEffect/> */}
     {/* <Timer/> */}
     <DataFetchEffect/>
    </div>
  );
}

export default App;
