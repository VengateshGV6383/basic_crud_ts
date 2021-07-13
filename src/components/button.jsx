import React from "react";
const Button = (props) => {
  return <button ref={props.refer} className="ui primary button" type={props.type}>{props.name}</button>;
};

export default Button;
