import React from "react";
interface Props {
  name: string;
  text: string;
}
const InputBox: React.FC<Props> = (props) => {
  return (
    <div className="field">
      <label style={{ fontSize: "1rem" }}>{props.text}</label>
      <input type="text" style={{ borderWidth: "2px" }} name={props.name} />
    </div>
  );
};

export default InputBox;
