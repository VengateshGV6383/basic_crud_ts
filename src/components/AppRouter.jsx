import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
import AddUser from './AddUser';
import ShowList from './ShowList';
import useLocalStorage from './hooks/useLocalStorage';
import EditUser from './EditUser';

const AppRouter = () => {
  const [users,setUsers]=useLocalStorage('users',[])
    return ( 
    <BrowserRouter>
        <Header />
        <Switch>
            
                <Route 
                render={(props)=>(
                  <AddUser {...props} users={users} setUsers={setUsers}/>
                  )}
                  path="/create/"
                
                />
                <Route
                 render={(props)=>(
                   <ShowList {...props} users={users} setUsers={setUsers}/>
                 )}
                 path="/"
                 exact={true}
                 
                 />
                 <Route
                 render={(props)=>(
                   <EditUser {...props} users={users} setUsers={setUsers}/>
                 )}
                 path="/edit/:id"
                
                 />
            
        </Switch>
      </BrowserRouter> 
      );
}
 
export default AppRouter;