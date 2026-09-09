import {useState,useEffect} from 'react';

const UseEffectDemo1 = () => {
    const[name, setName]=useState<string>("Rakib");
    useEffect(()=>{
        console.log('Change Name:',name);

    },[name])
    return (
        <div>
            <h2>Demo Effect</h2>
            <p>Name: {name}</p>
            <button onClick={()=>setName("Hasan")}>Change Name</button>
            
        </div>
    );
};

export default UseEffectDemo1;