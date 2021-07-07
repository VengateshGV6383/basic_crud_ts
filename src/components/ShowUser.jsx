import React from 'react';
import './Usercard.css';

const User=(props)=>{
    const {Username,USRID,Phno,Mailid,DeleteUser}=props
    const arr=[Username,USRID,Mailid,Phno]
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
                        <button className="ui basic green button edit-btn">Edit</button>
                        <button className="ui basic red button dlt-btn" onClick={()=>{DeleteUser(Phno)}}>Delete User</button>
                    </div>
                </div>
                </div>
        
    ) 
}
export default User;