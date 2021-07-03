import React from "react";
import InputBox from "./InputBox";
import Button from "./button";
const Form = () => {
  let fields = [
    { name: "UsrName", text: "Name" },
    { name: "USRID", text: "Credo-ID" },
    { name: "Phno", text: "Phone Number" },
    { name: "officialMail", text: "Email-ID" },
  ];
  
  return (
    <form className="ui form">
      {fields.map((field) => {
        return <InputBox text={field.text} name={field.name} />;
      })}
      <Button name="Create" />
    </form>
  );
};

export default Form;
