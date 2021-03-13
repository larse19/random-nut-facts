import logo from "./logo.svg";
import "./App.css";
import { randomNutFact } from "./nutFacts";

function App() {
  return (
    <div className="center">
      <p>{randomNutFact()}</p>
    </div>
  );
}

export default App;
