import { useState } from "react"

export default function() {
   const [count, setCount] = useState(10);

   const handleAdd = () => {
    let newCount = count + 1;
    setCount(newCount);
   }

   const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
   }

    const styleCount = {
        border: "2px solid tomato",
        padding:"20px",
        margin: '20px',
        borderRadius: '10px'
    }

    const buttonDiv = {
        display:'flex',
        justifyContent: "center",
        gap: "20px"
    }

    return (
        <div style={styleCount}>
            <h2>Count: {count}</h2>
            <div style={buttonDiv}>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}