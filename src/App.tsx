import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import New from "./components/new";
function App(){
  return (
    <div>
      <h1>Hello React</h1>
      <p>I am learning React with TypeScript.</p>

      <Welcome />
      <Profile/>
      <New/>
    </div>
  );
}

export default App;