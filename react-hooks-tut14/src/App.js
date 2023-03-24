import "./App.css";
import A from "./componets/A";
import { useApnaHook } from "./componets/Context";




function App() {



  const {count} = useApnaHook();


  return (


    <div className="container">
     useContext Hook
     <br/>
      {count}
     <A/>
    </div>

  );
}

export default App;
