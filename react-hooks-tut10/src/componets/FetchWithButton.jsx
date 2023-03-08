import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchWithButton = () => {
  const [Id, setId] = useState(null);
  const [title, setTitle] = useState("Title will be shown here");
  const [btnId, setbtnId] = useState(null);

  const link = `https://jsonplaceholder.typicode.com/posts/${Id}`;

  useEffect(() => {
    axios
      .get(link)
      .then((res) => {
        const data = res.data;
        setTitle(data.title);
      })
      .catch((err) => console.log(err));
  }, [btnId]);

  
  const handleChange = (e) => {
    const val = e.target.value;
    setId(val);
  };


  const handleClick = () =>{
    setbtnId(Id);
  }

  return (
    <div>
      <input type="text" placeholder="Enter ID" onChange={handleChange} />
      <button onClick={handleClick}>Fetch</button>
      <div>{title}</div>
    </div>
  );
};

export default FetchWithButton;
