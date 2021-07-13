import React from 'react';
import CreateUserForm from './CreateUserForm';


 const AddUser =({history ,users,setUsers})=>{

    const onSubmitForm=(user)=>{
       if(localStorage.getItem("userid")){
            let value = parseInt(localStorage.getItem("userid"))
            user["id"]=value;
       }
        else{
            localStorage.setItem("userid",0)
            user["id"]=0
        }
       
         setUsers([user,...users])
         setTimeout(()=>{
            history.push('/')
         },1000)
         localStorage.setItem("userid",parseInt(localStorage.getItem("userid"))+1)

    }
     return(
         <React.Fragment>
             <CreateUserForm handleFormSubmit={onSubmitForm}/>
         </React.Fragment>
     )
 }
 export default AddUser;