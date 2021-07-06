import React,{useState} from "react";

import Button from "./button";
import InputBox from "./InputBoxes";

const Form = (props) => {
  const [user,SetNewUser]=useState({
    Username:'',
    USRID:'',
    Phno:'',
    Mailid:''
  })
  const fields = [
    {id:0, name: "Username", text: "Name",type:"text",placeholder:"Username"},
    {id:1,name: "USRID", text: "Credo-ID",type:"text",placeholder:"Example:xoxo!456" },
    {id:2, name: "Phno", text: "Phone Number",type:"tel",placeholder:"999999999" },
    {id:3,name: "Mailid", text: "Email-ID",type:"email",placeholder:"exmaple@xoyo.com"},
  ];
 const [errMsg,setErrormsg]=useState('');
const {Username,USRID,Phno,Mailid}=user;
 const [invalidUsername,setErrMsgUsermname]=useState('');
 const [invalidMailId,setErrMsgMailId]=useState('');
 const [invalidUSRID,setErrMsgUSRID]=useState('');
 const [invalidPhno,setErrMsgPhno]=useState('');



  const onhandleSubmit=(event)=>{
            event.preventDefault();
            const values=[Username,USRID,Phno,Mailid];
            const noEmptyFields=values.every((field)=>{
                let eachfield=`${field}`.trim();
                return eachfield!=='' && eachfield!=='0';
            })
            let errorMsg=""
            if(noEmptyFields){
              const newuser={
                Username,
                USRID,
                Phno,
                Mailid
              }
              
              props.handleFormSubmit(newuser);
              errorMsg="Successfully Created"
            }
            else{
              errorMsg="No Empty Fields"
            }
            setErrormsg(errorMsg);

          }


  
  const handleInputChange=event=>{
    const {name,value}=event.target;
    switch(name){
      case 'Username':
        if(value!==" " && value.length>=8){
          SetNewUser((prevState)=>({
            ...prevState,
            [name]:value
            
          }))
          setErrMsgUsermname(" ");
        }
        else{
          if(value.length<8){
            setErrMsgUsermname("UserName must be greater than 7");
          }
              
        }
        break;
        case 'USRID':
          if(value.length>7 && value.match("(?=.*[A-Za-z0-9@!#$%^&*]){8,}")){
            SetNewUser((prevState)=>({
              ...prevState,
              [name]:value
              
            }))
            setErrMsgUSRID(" ")
          }
          else{
            let errMsg=""
            if(value.length===0)
              errMsg="User ID must atleast have 8 characters atleast One uppercase Alphabet,One lowercase numbers and special characters";
           else if(!(value.match("(?=.*[0-9]){1,}"))) 
              errMsg="User ID must have atleast one number";
            else if(!(value.match(value.match("(?=.*[!|@|#|$|%|^|&|*]){1,}"))))
              errMsg="User ID must contain atleast one special character"
            else if(!(value.match("[A-Z]")))
              errMsg="User ID must have atleast one Upper Case Alphabet"
            else if(!(value.match("[a-z]")))
              	errMsg="User ID must have atleast one Lower case Alphabet";
            else if(value.length<8)
              errMsg="User ID must contain atleast 8 characters"
            
            setErrMsgUSRID(errMsg);
          }
          break;
          case 'Phno':
            if(value!==" " && value.match("[0-9]{10}") && !(value.match("[0]{10}"))){
              SetNewUser((prevState)=>({
                ...prevState,
                [name]:value
              }))
              setErrMsgPhno(" ")
            }

            else{
              setErrMsgPhno("Enter a valid Phone number");
            }
            break;
            case 'Mailid':
              if(value!==" " && value.match("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$")){
                SetNewUser((prevState)=>({
                  ...prevState,
                  [name]:value
                }))
                setErrMsgMailId(" ");
              }
              else{
                setErrMsgMailId("Enter a valid mailid")
              }
              break;
        default:{<p>Oops something went wrong!</p>}
    }
  }
  const errMsgs={Username:invalidUsername,Mailid:invalidMailId,USRID:invalidUSRID,Phno:invalidPhno}
  const color=(errMsg==="Successfully Created")?"green":"red";
  return (
    <div style={{margin:"10px"}}>
      {errMsg && <p className="ui segment" style={{fontSize:"8",backgroundColor:`${color}`,color:"white"}}>{errMsg}</p>}

        <form className="ui fluid form" onSubmit={onhandleSubmit}>
        
        {fields.map(field=>{
          return(
            <InputBox 
            key={field.id}
            field={field}
            onInputChange={handleInputChange}
            errMsg={errMsgs[field.name]}
            
            />
          )
        })}
       
        
        <Button name="Create" type="submit"/>
       </form>
    </div>
    
  );
};

export default Form;
