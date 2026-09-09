import {useState, useEffect} from 'react';

const UseEffectDemo = () => {
    const[count, setCount]=useState<number>(0);

    useEffect(()=>{
        document.title=`Count: ${count}`
    },[count]);
    return (
        <div>
            <h2>useEffect Demo</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
};

export default UseEffectDemo;