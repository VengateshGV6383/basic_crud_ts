import React from 'react';
import CreateUserForm from './CreateUserForm';

 const AddUser=()=>{
     interface User{
        Username:string;
        USRID:string;
        Phno:number;
        Mail:string;
     }
    const onSubmitForm=(user:User)=>{
        console.log(user)
    }
     return(
         <React.Fragment>
             <CreateUserForm handleFormSubmit={onSubmitForm}/>
         </React.Fragment>
     )
 }
 export default AddUser;