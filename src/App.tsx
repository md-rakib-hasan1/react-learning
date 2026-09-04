import Welcome from "./components/Welcome";
import Profile from "./components/Profile";

function App(){
  return (
    <div>
      <h1>Hello React</h1>
      <p>I am learning React with TypeScript.</p>

      <Welcome />
      <Profile/>
    </div>
  );
}

export default App;