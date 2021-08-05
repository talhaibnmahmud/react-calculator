import { useState } from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";
import Operator from "./components/Operator";

function App() {
  const [previous, setPrevious] = useState("0");
  const [current, setCurrent] = useState("0");
  const [lastOperator, setLastOperator] = useState("");

  const updateCurrent = (text: string) => {
    if (current.includes(".") && text === ".") return;
    if (current === "0" && text === ".") {
      setCurrent((prev) => prev + text);
      return;
    }
    if (current === "0") {
      setCurrent(text);
      return;
    }

    setCurrent((prev) => prev + text);
  };

  const clearAll = () => {
    setPrevious("0");
    setCurrent("0");
  };

  const del = () => {
    if (current.length === 1) {
      setCurrent("0");
      return;
    }
    setCurrent(current.slice(0, current.length - 1));
  };

  const equals = () => {
    if (previous === "0" || current === "0") return;

    compute();
  };

  const operator = (text: string) => {
    if (current === "0.") return;
    if (current === "0" && previous === "0") return;

    if (current === "0" && previous !== "0") {
      setLastOperator(text);
      return;
    }
    if (current.endsWith(".")) setCurrent((prev) => prev + "0");

    setLastOperator(text);

    if (lastOperator) {
      const result = compute();
      setPrevious(result.toString());
      setCurrent("0");
      return;
    }

    setPrevious(current);
    setCurrent("0");
  };

  const compute = () => {
    let result: number = 0;

    switch (lastOperator) {
      case "+":
        result = parseFloat(previous) + parseFloat(current);
        console.log(result);
        break;
      case "-":
        result = parseFloat(previous) - parseFloat(current);
        console.log(result);
        break;
      case "*":
        result = parseFloat(previous) * parseFloat(current);
        console.log(result);
        break;
      case "/":
        result = parseFloat(previous) / parseFloat(current);
        console.log(result);
        break;
    }

    return result;
  };

  return (
    <main className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previous}</div>
        <div className="current-operand">{current}</div>
      </div>

      <Operator text="AC" classes="ac" callback={clearAll} />
      <Operator text="%" classes="operation" callback={operator} />
      <Operator text="/" classes="operation" callback={operator} />
      <Operator text="DEL" classes="operation" callback={del} />

      <Button text="1" callback={updateCurrent} />
      <Button text="2" callback={updateCurrent} />
      <Button text="3" callback={updateCurrent} />
      <Operator text="*" classes="operation" callback={operator} />

      <Button text="4" callback={updateCurrent} />
      <Button text="5" callback={updateCurrent} />
      <Button text="6" callback={updateCurrent} />
      <Operator text="-" classes="operation" callback={operator} />

      <Button text="7" callback={updateCurrent} />
      <Button text="8" callback={updateCurrent} />
      <Button text="9" callback={updateCurrent} />
      <Operator text="+" classes="operation span-two" callback={operator} />

      <Button text="." callback={updateCurrent} />
      <Button text="0" callback={updateCurrent} />
      <Operator text="=" classes="operation" callback={equals} />
    </main>
  );
}

export default App;
