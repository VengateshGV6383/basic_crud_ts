
import React,{useState,useReducer,useRef} from "react";
import Button from "./button";
import InputBox from "./InputBoxes";
// interface User{

//   Username:string;
//   USRID:string;
//   Phno:string;
//   Mailid:string;
// }// // const fieldsconst fields: Array<{
  //   id:number,
  //   name:"Username"|"USRID"|"Phno"|"Mailid",
  //   text:string,
  //   type:"text"|"tel"|"email",
  //   placeholder:string
    
  // }>= //: User


const CreateUserForm = ({existingUser,handleFormSubmit}) => {
  const [user,SetNewUser]=useState({

    Username: existingUser?existingUser.Username:'',
    USRID: existingUser?existingUser.USRID:'',
    Phno: existingUser?existingUser.Phno:'',
    Mailid: existingUser?existingUser.Mailid:''
  })
  
  const fields= [
    {id:0, name: "Username", text: "Username",type:"text",placeholder:"Username"},
    {id:1,name: "USRID", text: "Credo-ID",type:"text",placeholder:"Example:xoxo!456" },
    {id:2, name: "Phno", text: "Phone Number",type:"tel",placeholder:"999999999" },
    {id:3,name: "Mailid", text: "Email-ID",type:"email",placeholder:"exmaple@xoyo.com"},
  ];
 const refBtn=useRef(null);
 const [submitState,setSubmitState]=useState('')
 const intialState={
  Usrmsg:" ",
  USRIDmsg:" ",
  Phnomsg:" ",
  Mailidmsg:" "
 }

 const reducer=(state,fields)=>{
   //console.log(state,fields)
  switch(fields){
    case 'Username':
        if(user[fields].length<8) state.Usrmsg="Username must have atleast 8 characters"; 
        else state.Usrmsg=" ";
        break;
    
      case 'USRID':
                            if(user[fields].length===0)
                              state.USRIDmsg="User ID must have 8 characters atleast One Uppercase alphabet,One lowercase alphabet,numbers and special characters";
                            else if(!(user[fields].match("[A-Z]")))
                              state.USRIDmsg="User ID must have  one Upper Case Alphabet";
                            else if(!(user[fields].match("[a-z]")))
                                state.USRIDmsg="User ID must have  one Lower case Alphabet";  
                            else if(!(user[fields].match("(?=.*[0-9]){1,}"))) 
                              state.USRIDmsg="User ID must have atleast one number";
                            else if(!(user[fields].match("(?=.*[!|@|#|$|%|^|&|*]){1,}")))
                              state.USRIDmsg="User ID must have one special character";
                            else if(user[fields].length<8)
                              state.USRIDmsg="User ID must contain atleast 8 characters";
                            else state.USRIDmsg=" "
                              break;

         case 'Phno':
              if(user[fields].length<10) state.Phnomsg="Phone number  must me 10 digits";
              else state.Phnomsg=" ";
              break;
          case 'Mailid':
            if (!user[fields].match("^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+$"))
              state.Mailidmsg="Enter a valid mailid";
            else
              state.Mailidmsg=" ";
              break;
          default:break;
            
 }
 return state;
}
 const [errMessage,setErrMsg]=useReducer(reducer,intialState)
 
 const {Username,USRID,Phno,Mailid}=user;
//if error return true
  const handleErrors=()=>{
    const {Usrmsg,USRIDmsg,Mailidmsg,Phnomsg}=errMessage;
    let value1=[Usrmsg,USRIDmsg,Mailidmsg,Phnomsg];
    const{Username,USRID,Phno,Mailid}=user
    let value2=[Username,USRID,Phno,Mailid];  
    let noerrors=value1.every(item=>{
      return (item===" ")
    });
  
   let noemptyFields= value2.every(item=>{
     let val =`${item.trim()}`;
      return (val!==" " && val.length!==0)
    })
    return (noerrors && noemptyFields);
  }
  const onhandleSubmit=(event)=>{
            event.preventDefault();
            //boolean
            let errorFields=handleErrors();
            let errorMsg=[];
            if(errorFields){
              refBtn.current.style.filter="opacity(30%)";
              const newuser={
                Username,
                USRID,
                Phno,
                Mailid
              }
              handleFormSubmit(newuser);
              errorMsg="Successfully Created"
            }
            else{
              errorMsg="Nomore errors or empty fields should occur";
              refBtn.current.style.filter="opacity(30%)";
              
              
            }
            setSubmitState(errorMsg);

          }
  const handleInputChange=(event)=>{

    const{name,value}=event.target;
    switch(name){
      case 'Username':
        SetNewUser((prevState)=>({
          ...prevState,
          [name]:value
          
        }))
      break;
      case 'USRID':
        SetNewUser((prevState)=>({
          ...prevState,
          [name]:value
          
        }))
        
      break;
      case 'Mailid':
        SetNewUser((prevState)=>({
          ...prevState,
          [name]:value
        }))

      break;
      case 'Phno':
        SetNewUser((prevState)=>({
          ...prevState,
          [name]:value
          
        }))

      break;
      default:break;
    }
    setErrMsg(name);
  }
 const errMsgs={Username:errMessage["Usrmsg"],Mailid:errMessage.Mailidmsg,USRID:errMessage.USRIDmsg,Phno:errMessage.Phnomsg}

 const color=(submitState==="Successfully Created")?"green":"red";
  return (
    <div style={{margin:"10px"}}>
      {submitState && <p className="ui segment" style={{fontSize:"8",backgroundColor:`${color}`,color:"white"}}>{submitState}</p>}

        <form className="ui fluid form" onSubmit={onhandleSubmit}>
        
        {fields.map((field)=>{
          
          return(
            <InputBox 
            key={field.id}
            value={user}
            field={field}
            onInputChange={handleInputChange}
            errMsg={errMsgs[field.name]}
            
            />
          )
        })}        
        <Button name="Create" refer={refBtn}type="submit"/>
       </form>
    </div>
    
  );
};

export default CreateUserForm;
