import { useState } from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";
import Operator from "./components/Operator";

function App() {
  const [prev] = useState("0");
  const [current, setCurrent] = useState("0");

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

      <Button text="1" current={current} setCurrent={setCurrent} />
      <Button text="2" current={current} setCurrent={setCurrent} />
      <Button text="3" current={current} setCurrent={setCurrent} />
      <Operator text="*" classes="operation" />

      <Button text="4" current={current} setCurrent={setCurrent} />
      <Button text="5" current={current} setCurrent={setCurrent} />
      <Button text="6" current={current} setCurrent={setCurrent} />
      <Operator text="-" classes="operation" />

      <Button text="7" current={current} setCurrent={setCurrent} />
      <Button text="8" current={current} setCurrent={setCurrent} />
      <Button text="9" current={current} setCurrent={setCurrent} />
      <Operator text="+" classes="operation span-two" />

      <Button text="." current={current} setCurrent={setCurrent} />
      <Button text="0" current={current} setCurrent={setCurrent} />
      <Operator text="=" classes="operation" />
    </main>
  );
}

export default App;
