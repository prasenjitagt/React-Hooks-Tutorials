import { useApnaHook } from "./Context"


function C() {


  const {inc, dnc} = useApnaHook();

  return (
    <div>
      <button onClick={inc}>Up</button>
      <br />
      <button onClick={dnc}>Down</button>
    </div>
  )
}

export default C