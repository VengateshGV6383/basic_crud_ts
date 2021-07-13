import React from 'react';
import CreateUserForm from './CreateUserForm';
import { useParams } from 'react-router';
const EditUser = ({history,users,setUsers}) => {
    const {id}=useParams();
    const userTobeUpdated=users.find((user)=>user.id===parseInt(id));
    const onSubmitForm=(UpdatedUser)=>{
        UpdatedUser["id"]=id;
        const reaminingUser=users.filter((item)=>item.id!==parseInt(id))
        setUsers([UpdatedUser,...reaminingUser]);
        history.push('/');
    }
    
    console.log(userTobeUpdated);
    return (
        <div>
            <CreateUserForm existingUser={userTobeUpdated} handleFormSubmit={onSubmitForm}/>
        </div>
      );
}
 
export default EditUser;