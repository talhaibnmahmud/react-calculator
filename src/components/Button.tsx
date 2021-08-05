import { FC } from "react";

type Props = {
  text: string;
  callback: (text: string) => void;
};

const Button: FC<Props> = ({ text, callback }) => {
  return (
    <button className="calculator-button" onClick={() => callback(text)}>
      {text}
    </button>
  );
};

export default Button;
