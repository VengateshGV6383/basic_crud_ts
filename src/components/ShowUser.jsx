import React from 'react';
import './Usercard.css';
import { useHistory } from 'react-router';
const User=(props)=>{
    const {id,Username,USRID,Phno,Mailid,DeleteUser}=props
    const arr=[Username,USRID,Mailid,Phno]
    const history=useHistory();
    const properties=["Username","ID","Mailid","Phno"]
    return(
        
            <div className="card user-card">
                <div className="content user-content">
                    <div className="header">
                        <h3>USER DETAILS</h3>
                    </div>
                </div>
                <div className="user-details">
                { arr.map(item=>{
                    return (
                    <li className="description">{properties[arr.indexOf(item)] } : {item}</li>
                    )
                })
               }
                </div>
                
                <div className="extra content">
                    <div className="ui two buttons btn">
                        <button className="ui basic green button edit-btn" onClick={()=>history.push(`/edit/${id}`)}>Edit</button>
                        <button className="ui basic red button dlt-btn" onClick={()=>{DeleteUser(id)}}>Delete User</button>
                    </div>
                </div>
                </div>
        
    ) 
}
export default User;