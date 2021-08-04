import { FC, Dispatch, SetStateAction } from "react";

type Props = {
  text: string;
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
};

const Button: FC<Props> = ({ text, current, setCurrent }) => {
  const updateCurrent = () => {
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

  return (
    <button className="calculator-button" onClick={updateCurrent}>
      {text}
    </button>
  );
};

export default Button;
