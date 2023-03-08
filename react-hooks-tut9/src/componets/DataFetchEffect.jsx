import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataFetchEffect = () => {
    const link = "https://jsonplaceholder.typicode.com/posts";

    const [info, getInfo] = useState([])
    useEffect(()=>{
        //Axios
        const getData = async () =>{
            const res = await axios.get(link);
            getInfo(res.data)
            console.log(res.data);
        }

        getData();
    },[])
  return (
    <div>{info.map(item => <li key={item.id}>{item.title}</li>)}</div>
  )
}

export default DataFetchEffect