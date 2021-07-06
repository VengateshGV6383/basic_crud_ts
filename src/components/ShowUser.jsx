import React from 'react';
const User=(props)=>{
    const {Username,USRID,Phno,Mailid,DeleteUser}=props
    const arr=[Username,USRID,Mailid,Phno]
    const properties=["Username","ID","Mailid","Phno"]
    return(
        
            <div className="card" style={{padding:10,border:"2px solid whitesmoke",maxWidth:"270px"}}>
                <div className="content">
                    <div className="header" style={{padding:5}}>
                        <h3>User Details</h3>
                    </div>
                </div>
                { arr.map(item=>{
                    return (
                        <div className="description" style={{padding:"5px",color:"orange"}}>
                        <h5>{properties[arr.indexOf(item)] } :{item}</h5> 
                        </div>
                    )
                })
               }
                <div className="extra content" style={{margin:"5px"}}>
                    <div className="ui two buttons">
                        <buttom className="ui basic green button">Edit</buttom>
                        <button className="ui basic red button" onClick={()=>{DeleteUser(Phno)}}>Delete User</button>
                    </div>
                </div>
                </div>
        
    ) 
}
export default User;