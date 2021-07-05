import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (  
        <div className="ui segment">
        <h1>Basic Crud Operations App</h1>
        <header>
            <div>
                <NavLink to="/Create" >Create</NavLink>
                <NavLink to="/ShowUsers"></NavLink>
            </div>
        </header>
      </div>
    );
}
 
export default Header;