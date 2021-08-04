import { FC } from "react";

type Props = {
  text: string;
  classes?: string;
  callback?: (type: string) => void;
};

const Operator: FC<Props> = ({ text, classes, callback }) => {
  return (
    <button
      className={"calculator-button " + (classes ? classes : "")}
      onClick={(e) => {
        callback && callback(text);
      }}
    >
      {text}
    </button>
  );
};

export default Operator;
