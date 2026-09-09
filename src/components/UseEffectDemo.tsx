import {useState, useEffect} from 'react';

const UseEffectDemo = () => {
    const[count, setCount]=useState<number>(0);

    useEffect(()=>{
        console.log("Component rendered")
    },[count]);
    return (
        <div>
            <h2>useEffect Demo</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
};

export default UseEffectDemo;