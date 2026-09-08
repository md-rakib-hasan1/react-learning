import {useState} from 'react';

const Event = () => {
    const[name, setName]=useState<string>("");
    const[message,setMessage]=useState<string>('');

const handleClick=()=>{
    setMessage(`Hello, ${name}!`);
}

    return (
        <div>
            <h2>Event Handling</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                 id="name"
                 type="text"
                 value={name}
                 onChange={(e)=>setName(e.target.value)} />
            </div>
            <button onClick={handleClick}>Click</button>
            <p>{message}</p>
            
        </div>
    );
};

export default Event;