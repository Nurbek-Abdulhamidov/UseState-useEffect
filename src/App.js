import { useEffect, useState } from "react";
import "./App.css";
import Clicker from "./components/Clicker";
import Refer from "./components/Refer";

function App() {
  const [isClicker, setClicker] = useState(false);
  useEffect(() => {
    console.log("render", isClicker);
    return () => console.log("Bybe");
  }, [isClicker]);
  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />}
      <Refer/>
    </div>
  );
}

export default App;
