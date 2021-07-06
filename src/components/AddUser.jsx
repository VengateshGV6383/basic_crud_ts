import React from 'react';
import CreateUserForm from './CreateUserForm';


 const AddUser =({history ,users,setUsers})=>{

    const onSubmitForm=(user)=>{
         setUsers([user,...users])
         history.push('/')
    }
     return(
         <React.Fragment>
             <CreateUserForm handleFormSubmit={onSubmitForm}/>
         </React.Fragment>
     )
 }
 export default AddUser;