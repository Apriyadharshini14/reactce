import React,{useState} from 'react';
function MyFavColour()
{
    const[colour,setColour]=useState(" black");
    return (
        <div>
            <p>My favorite colour is{colour}</p>
            <button on onClick={()=>setColour(" red")}>Change</button>
        </div>
    );
} export default MyFavColour;