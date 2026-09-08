import { useState } from 'react';

const EventHandling = () => {
    const [message, setMessage] = useState<string>("");

    const handleClick=()=>{
        setMessage("Button Clicked!")
    }

    const handleNameClick = (name:string) => {
        setMessage(`Hello ${name}`);
    };
    return (
        <div>
            <h2>Event Handling</h2>
            <p>{message}</p>
            <button onClick={handleClick}>
                Click Me</button>
                 <button onClick={()=>handleNameClick("Rakib")}>Say Hello</button>
            

        </div>
    );
};

export default EventHandling;