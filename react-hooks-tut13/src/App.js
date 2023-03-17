import React, { createContext } from "react";
import "./App.css";
import A from "./componets/A";

export const myContext = createContext();

//Create the context with {createContext}
//Provide the context with .Provider property and Wrap the Parent Component.
//Use the sent data with useContext Hook.

function App() {

  const fn = "The";
  const mn = "Tripura";
  const ln = "Classes";

  const channel = {fn,mn,ln};

  return (

    <myContext.Provider value={channel}>

    <div className="container">
     useContext Hook

     <A/>

    </div>
    </myContext.Provider>
  );
}

export default App;
