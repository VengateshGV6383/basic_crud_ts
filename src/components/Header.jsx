import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (  
        <div className="ui segment" >
        <h1>Basic Crud Operations App</h1>
        <header style={{display:"flex"}}>
            <div style={{margin:"5px"}}>
                <NavLink to="/Create" >Create</NavLink>
            </div>
            <div style={{margin:"5px"}}>
            <NavLink to="/ShowUsers">ShowUsers</NavLink>
            </div>
            
        </header>
      </div>
    );
}
 
export default Header;