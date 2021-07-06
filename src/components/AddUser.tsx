import React from 'react';
import CreateUserForm from './CreateUserForm';

export interface User{
   Username:string;
   USRID:string;
   Phno:string;
   Mailid:string;
}

 const AddUser=()=>{
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