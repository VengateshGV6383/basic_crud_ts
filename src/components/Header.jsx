import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (  
        <div className="ui segment" >
        <h1 style={{color:"orange"}}>React CRUD Operations App</h1>
        <header >
            <div>
                <NavLink to="/Create"className="navlink" activeClassName="active-link" >Create</NavLink>
            </div>
            <div>
                <NavLink to="/" exact className="navlink" activeClassName="active-link">ShowUsers</NavLink>
            </div>
            
        </header>
      </div>
    );
}
 
export default Header;