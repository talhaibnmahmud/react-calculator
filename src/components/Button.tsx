import { FC } from "react";

type Props = {
  text: number | string;
};

const Button: FC<Props> = ({ text }) => {
  return <button className="calculator-button">{text}</button>;
};

export default Button;
