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

      <Button text="1" current={current} setCurrent={setCurrent} />
      <Button text="2" current={current} setCurrent={setCurrent} />
      <Button text="3" current={current} setCurrent={setCurrent} />
      <Operator text="*" classes="operation" callback={operator} />

      <Button text="4" current={current} setCurrent={setCurrent} />
      <Button text="5" current={current} setCurrent={setCurrent} />
      <Button text="6" current={current} setCurrent={setCurrent} />
      <Operator text="-" classes="operation" callback={operator} />

      <Button text="7" current={current} setCurrent={setCurrent} />
      <Button text="8" current={current} setCurrent={setCurrent} />
      <Button text="9" current={current} setCurrent={setCurrent} />
      <Operator text="+" classes="operation span-two" callback={operator} />

      <Button text="." current={current} setCurrent={setCurrent} />
      <Button text="0" current={current} setCurrent={setCurrent} />
      <Operator text="=" classes="operation" callback={equals} />
    </main>
  );
}

export default App;
