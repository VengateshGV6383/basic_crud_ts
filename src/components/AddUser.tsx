import React from 'react';
import CreateUserForm from './CreateUserForm';

 const CreateUser=()=>{
    const onSubmitForm=()=>{
        
    }
     return(
         <React.Fragment>
             <CreateUserForm handleFormSubmit={onSubmitForm}/>
         </React.Fragment>
     )
 }
 export default CreateUser;