import {useState} from 'react';

const LoginStatus = () => {
    const[isLoggedIn, setIsLoggedIn]=useState<boolean>(false);

    return (
        <div>
            {isLoggedIn ?(<h2>Welcome Rakib</h2> ):(<h2>Please Login</h2> )}
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}</button>
            
        </div>
    );
};

export default LoginStatus;