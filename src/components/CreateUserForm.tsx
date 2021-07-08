
import React,{useState,useReducer} from "react";
import Button from "./button";
import InputBox from "./InputBoxes";

interface User{
  Username:string;
  USRID:string;
  Phno:string;
  Mailid:string;
}
interface FormProps {
  handleFormSubmit: (user: User) => void
}

const Form = (props: FormProps) => {
  const [user,SetNewUser]=useState({
    Username:'',
    USRID:'',
    Phno:'',
    Mailid:''
  })
  const fields: Array<{
    id:number,
    name:"Username"|"USRID"|"Phno"|"Mailid",
    text:string,
    type:"text"|"tel"|"email",
    placeholder:string
    
  }>= [
    {id:0, name: "Username", text: "Username",type:"text",placeholder:"Username"},
    {id:1,name: "USRID", text: "Credo-ID",type:"text",placeholder:"Example:xoxo!456" },
    {id:2, name: "Phno", text: "Phone Number",type:"tel",placeholder:"999999999" },
    {id:3,name: "Mailid", text: "Email-ID",type:"email",placeholder:"exmaple@xoyo.com"},
  ];
 const [errMsg,setErrormsg]=useState('');
 const {Username,USRID,Phno,Mailid}=user;
//  const [invalidUsername,setErrMsgUsermname]=useState('');
//  const [invalidMailId,setErrMsgMailId]=useState('');
//  const [invalidUSRID,setErrMsgUSRID]=useState('');
//  const [invalidPhno,setErrMsgPhno]=useState('');
 const intialState={
  UsernameerrMsg:"",
  USRIDerrMsg:"",
    PhnoerrMsg:"",
    MailiderrMsg:""
 }

 const reducer=(errMsg:any,event:React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value}=event.target;
  switch(name){
    case 'Username':
                if(value!==" " && value.length>=8){
                  SetNewUser((prevState)=>({
                    ...prevState,
                    [name]:value
                    
                  }))
                  return{...errMsg,UsernameerrMsg:" "}
                }
                else{
                  if(value.length<8){
                    return {...errMsg,UsernameerrMsg:"User name must be grater than 7 characters"}
                  }
                      
                }
      break;
      case 'USRID': if(value.length>7 && value.match("(?=.*[A-Za-z0-9@!#$%^&*]){8,}")){
                            SetNewUser((prevState)=>({
                              ...prevState,
                              [name]:value
                              
                            }))
                            return{...errMsg,USRIDerrMsg:""}
                          }
                          else{
                            let errorMsg=""
                            if(value.length===0)
                              errorMsg="User ID must atleast have 8 characters atleast One Uppercase alphabet,One lowercase alphabet,numbers and special characters";
                            else if(!(value.match("[A-Z]")))
                              errorMsg="User ID must have atleast one Upper Case Alphabet"
                            else if(!(value.match("[a-z]")))
                                errorMsg="User ID must have atleast one Lower case Alphabet";  
                            else if(!(value.match("(?=.*[0-9]){1,}"))) 
                              errorMsg="User ID must have atleast one number";
                            else if(!(value.match("(?=.*[!|@|#|$|%|^|&|*]){1,}")))
                              errorMsg="User ID must contain atleast one special character"
                            else if(value.length<8)
                              errorMsg="User ID must contain atleast 8 characters"
                            
                                return{...errMsg,USRIDerrMsg:errorMsg};
                          }
        
         case 'Phno':
             if(value !==" "&&  value.match("[0-9]{10}") && !(value.match("[0]{10}"))){
              SetNewUser((prevState)=>({
                ...prevState,
                [name]:value
                
              }))
                  return {...errMsg,PhnoerrMsg:" "}
               }
            else{
                 return{...errMsg,PhnoerrMsg:"Enter a valid Phone number"};

            }

          case 'Mailid':
            if(value!==" " && value.match("^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+$")){
              SetNewUser((prevState)=>({
                ...prevState,
                [name]:value
              }))
              return {...errMsg,MailiderrMsg:" "}
            }
            else{
              return {...errMsg,MailiderrMsg:"Enter a valid EmailID"}
              
            }
            
 }
}
 const [state,setErrMsg]=useReducer(reducer,intialState)

  const onhandleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault();
            const values=[Username,USRID,Phno,Mailid];
            const noEmptyFields=values.every((field)=>{
                let eachfield=`${field}`.trim();
                return eachfield!=='' && eachfield!=='0';
            })
            let errorMsg=""
            if(noEmptyFields){
              const newuser: User={
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
  const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setErrMsg(event)
  }

  const errMsgs={Username:state.UsernameerrMsg,Mailid:state.MaildiderrMsg,USRID:state.USRIDerrMsg,Phno:state.PhnoerrMsg}
  const color=(errMsg==="Successfully Created")?"green":"red";
  return (
    <div style={{margin:"10px"}}>
      {errMsg && <p className="ui segment" style={{fontSize:"8",backgroundColor:`${color}`,color:"white"}}>{errMsg}</p>}

        <form className="ui fluid form" onSubmit={onhandleSubmit}>
        
        {fields.map((field)=>{
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
