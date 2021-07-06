import React from 'react';
import User from './ShowUser';
const ShowList = ({users,setUsers}) => {
    const onDeleteUser=(Phno)=>{
        setUsers(users.filter(user=>user.Phno!==Phno))
    }
    return ( 
    <React.Fragment>
         <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"10px"}}>
            <div style={{flexBasis:"100%"}}>
                <h2 className="ui segment">List of Records</h2> 
            </div>
            <div style={{flexBasis:"70%"}}>
            {users.length!==0 ? users.map(user=>{
            return(<User key={users.indexOf(user)} {...user} DeleteUser={onDeleteUser}/>)
            }):<h2 style={{backgroundColor:"red",color:"white"}} className="ui segment">No users to show!</h2>}
            </div>
            
            </div>
    </React.Fragment>
   

    );
}
 
export default ShowList;