import { useState } from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";
import Operator from "./components/Operator";

function App() {
  const [prev] = useState("0");
  const [current] = useState("0");

  return (
    <main className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{prev}</div>
        <div className="current-operand">{current}</div>
      </div>

      <Operator text="AC" classes="ac" />
      <Operator text="%" classes="operation" />
      <Operator text="/" classes="operation" />
      <Operator text="DEL" classes="operation" />

      <Button text={1} />
      <Button text={2} />
      <Button text={3} />
      <Operator text="*" classes="operation" />

      <Button text={4} />
      <Button text={5} />
      <Button text={6} />
      <Operator text="-" classes="operation" />

      <Button text={7} />
      <Button text={8} />
      <Button text={9} />
      <Operator text="+" classes="operation span-two" />

      <Button text={"."} />
      <Button text={0} />
      <Operator text="=" classes="operation" />
    </main>
  );
}

export default App;
