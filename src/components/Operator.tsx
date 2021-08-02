import { FC } from "react";

type Props = {
  text: string;
  classes?: string;
};

const Operator: FC<Props> = ({ text, classes }) => {
  return (
    <button className={"calculator-button " + (classes ? classes : "")}>
      {text}
    </button>
  );
};

export default Operator;
