import { useState } from "react";

const User=({name,location,contact})=>{
    const [count1,setCount]=useState(0);
    //const [count2,setCount2]=useState(1);

    return (
        <div className="">
            <h2>Name: {name}</h2>
            <p>Location: {location}</p>
            <p>Contact: {contact}</p>
            <h3>Count1 : {count1}</h3>
            <button onClick={()=>{
                setCount(count1+1);
            }}>Count Increase</button>
        </div>
    )
}
export  default User;