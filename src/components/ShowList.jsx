import React from 'react';
import User from './ShowUser';
import "./ShowList.css";

const ShowList = ({users,setUsers}) => {
    const onDeleteUser=(id)=>{
        setUsers(users.filter(user=>user.id!==id))
    
    }
    return ( 
    <React.Fragment>
         <div className="flex">
            <div style={{flexBasis:"100%"}}>
                <h2 className="ui segment">List of Records</h2> 
            </div>
            <div className="user-cards-block">
                    {users.length!==0 ? users.map(user=>{
                    return(<User key={users.indexOf(user)} {...user} DeleteUser={onDeleteUser}/>)
                    }):<h2 style={{backgroundColor:"red",color:"white"}} className="ui segment">No users to show!</h2>}
            </div>
            
            </div>
    </React.Fragment>
   

    );
}
 
export default ShowList;