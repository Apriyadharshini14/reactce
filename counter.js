import React, {useState} from 'react';
const Counter =()=>{
  const[count, setCount]=useState(0);
  const countTest=0;
  console.log(countTest)
  return(
    <div>
    <p> <b>Count: </b> {count}</p>
    <button onClick={()=>setCount((prev)=>prev-1)}><b><h2>Decrement</h2></b> </button><br></br>
  
    <button onClick={()=>setCount((prev)=>prev+1)}><b><h2>Increment</h2></b></button><br></br>

    <button onClick={() => setCount(0)}><b><h1>Reset</h1></b></button>
    </div>
  );
};
export default Counter;