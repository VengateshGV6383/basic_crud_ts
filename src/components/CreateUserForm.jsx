import React,{useState} from "react";

import Button from "./button";

const Form = (props) => {
  const [user,SetNewUser]=useState({
    Username:'',
    USRID:'',
    Phno:'',
    Mail:''
  })

  const [errMsg,setErrormsg]=useState('');
  const {Username,USRID,Phno,Mail}=user;
  const onhandleSubmit=(event)=>{
    event.target.preventDefault;
    props.handleFormSubmit();
   }
  const fields = [
    { name: "UsrName", text: "Name",type:"text",Msg:"" },
    { name: "USRID", text: "Credo-ID",type:"text" ,Msg:"" },
    { name: "Phno", text: "Phone Number",type:"number",Msg:"" },
    { name: "officialMail", text: "Email-ID",type:"emial",Msg:"" },
  ];
  
  return (
    <div>
        <form className="ui form" onSubmit={onhandleSubmit}>
       
        {fields.map(field=>{
          return(
            <div className="field">
                <label htmlFor={field.name} style={{fontSize:"1rem"}}>{field.text}
                  <input style={{borderWidth:"2px"}} name={field.name} type={field.type}/>
                </label>
              <h4 style={{color:"gainsboro",fontSize:"8px"}}>{field.Msg}</h4>
            </div>
          )
        })}
        <Button name="Create" type="submit"/>
       </form>
    </div>
    
  );
};

export default Form;
