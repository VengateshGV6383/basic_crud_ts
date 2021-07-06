import React from 'react';
const User=(props)=>{
    const {Username,USRID,Phno,Mailid,DeleteUser}=props
    return(
        
            <div classNam="ui card">
                <div className="content">
                    <div className="header">Users</div>
                </div>
                <div className="description">
                    <p>
                        Username : {Username}
                        ID       : {USRID}
                        Mailid   : {Mailid}
                        Phno     : {Phno}
                    </p>
                </div>
                <div className="extra content">
                    <div className="ui two buttons"></div>
                </div>
                <buttom className="ui basic green button">Edit</buttom>
                <button className="ui basic red button" onClick={()=>{DeleteUser(Phno)}}>Delete User</button>
            </div>
        
    ) 
}
export default User;