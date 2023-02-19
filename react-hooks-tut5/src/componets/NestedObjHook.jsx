import { useImmer } from 'use-immer';

function NestedObjHook() {

    const obj = {
        name: "",
        address: {
            state: "",
            pin:""
        }
    }

    const [info, setInfo] = useImmer(obj);

    const cName = e => {
        setInfo(draft => {
            draft.name=e.target.value
        })
    }


    const cState = e =>{
        setInfo(kuch =>{
            kuch.address.state=e.target.value
        })
    }

    const cPin = e =>{
        setInfo(draft =>{
            draft.address.pin = e.target.value
        })
    }

  return (
    <div>
        <form action="">
            <input onChange={cName} type="text" placeholder='Name'/>
            <input onChange={cState} type="text" placeholder='State'/>
            <input onChange={cPin} type="text" placeholder='Pin'/>
            <button type='reset' onClick={()=>setInfo(obj)}>Reset</button>
        </form>
        <div>Name: {info.name}</div>
        <div>State: {info.address.state}</div>
        <div>Pin: {info.address.pin}</div>
    </div>
  )
}

export default NestedObjHook