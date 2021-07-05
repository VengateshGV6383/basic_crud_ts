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
    {id:0, name: "Username", text: "Name",type:"text"},
    {id:1,name: "USRID", text: "Credo-ID",type:"text"  },
    {id:2, name: "Phno", text: "Phone Number",type:"tel" },
    {id:3,name: "Mailid", text: "Email-ID",type:"email"},
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
              errorMsg="Success"
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
          if(value.match("(?=.*[A-Za-z0-9@!#$%^&*]){8,}")){
            SetNewUser((prevState)=>({
              ...prevState,
              [name]:value
              
            }))
            setErrMsgUSRID(" ")
          }
          else{
            let errMsg=""
            if(value.length<7){
              setErrMsgUSRID("Password must atleast have seven characters");
            }
            else{
              errMsg=(value.length<8)?(value.match("(?.=*[0-9])")?"Must have one special character":(value.match("?.=*[!|@|#|$|%|^|&|*]"))?"Must have one number":"Must have one Alphabet character"):"Must be greater than 7 digits"
            }
            setErrMsgUSRID(errMsg);
          }
          break;
          case 'Phno':
            if(value!==" " && value.match("[0-9]{10}")){
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
  const color=(errMsg==="Success")?"green":"red";
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
