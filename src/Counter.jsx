import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const btnAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const btnReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return(
        <div style={{border:"2px solid skyblue", margin:"20px", padding:"20px", borderRadius:"20px"}}>
            <h3>Counter: {count}</h3>
            <button onClick={btnAdd}>Add</button>
            <button onClick={btnReduce}>Reduce</button>
        </div>
    )
}