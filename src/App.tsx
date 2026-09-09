import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import New from "./components/New";
import Product from "./components/Product";
import Counter from "./components/Counter";
import StudentList from "./components/StudentList";
import { useState } from "react";
import NewStudentList from "./components/NewStudentList";
import LoginStatus from "./components/LoginStatus";
import EventHandling from "./components/EventHandling";
import Event from "./components/Event";
import StudentForm from "./components/StudentForm";
import UseEffectDemo from "./components/UseEffectDemo";
import UseEffectDemo1 from "./components/UseEffectDemo1";
function App() {
  const[name, setName]=useState<string>("Rakib");
  const[isLoggedIn, setIsLoggedIn]=useState<boolean>(false);
  return (
    <div>
      <h1>Hello React</h1>
      <p>I am learning React with TypeScript.</p>

      <Welcome />
      <New />
      <Profile
        name="Rakib Hasan"
        role="Frontend Developer"
        learning="React + TypeScript"
      />
      <Profile
        name="Hasan"
        role="Student"
        learning="React"
      />
      <Profile
        name="John Doe"
        role="Backend Developer"
        learning="Node.js"
      />

      <Profile
        name="Sarah"
        role="UI Designer"
        learning="Figma"
      />

      <Product
        productName="Laptop"
        price ={80000} 
      category="Electronics"
      />
 
   <h1>Hello {name}</h1>
   <button onClick={()=>setName("Hasan")}>
    Change name
   </button>

   <h1>
    {isLoggedIn ? "Welcome Rakib" : "Please Login"}
   </h1>
   <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
    Login/Logout
   </button>
   <Counter/>
   <StudentList/>
   <NewStudentList/>
   <LoginStatus/>
   <EventHandling/>
   <Event/>
   <StudentForm/>
   <UseEffectDemo/>
   <UseEffectDemo1/>
    </div>
  );
}

export default App;