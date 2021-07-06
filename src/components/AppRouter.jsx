import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
import AddUser from './AddUser';
import ShowList from './ShowList';
const AppRouter = () => {
    return ( 
    <BrowserRouter>
    
        <Header />
        <Switch>
            
                <Route component={AddUser} path="/create"/>
                <Route component={ShowList} path="/show"/>
            
        </Switch>
      </BrowserRouter> 
      );
}
 
export default AppRouter;