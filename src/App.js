import logo from "./logo.svg";
import "./App.css";
import { randomNutFact, randomEquation } from "./nutFacts";

function App() {
  return (
    <div>
      <div className="center">
        <p>random nut fact</p>
        <p>{randomNutFact()}</p>
      </div>
      <br />
      <br />
      <br />
      <div className="center">
        <p>random equation</p>
        <p>{randomEquation()}</p>
      </div>
    </div>
  );
}

export default App;
