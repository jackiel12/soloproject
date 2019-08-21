import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mantra from './MantraContainer'
import Entry from './EntryContainer'
import Login from './LoginContainer'



//react router container should render side bar that renders its own component from  main
const routes = [
    {
        path: '/login', 
        main:()=> <div className="LoginDisplays">
            <h2>Login</h2>
            <Login/>
        </div>
    },
    {
        path: '/home', 
        main:()=> <div className='routerDisplays'>
        <h2>Home</h2>
        <Mantra/>
        </div>
    }, 
    {
        path: '/newentry', 
        main: ()=> <div className='JournalDisplays'>
            <h2>Journal</h2>
            <Entry/>
        </div>
    }, 
    {
        path: '/weeklyposts', 
        main: () => <h2>Weekly</h2>
    }
]

function Sidebar() {
    return (
        <Router>
            <div className='SideMenu'>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/newEntry'>Journal</Link></li>
                    <li><Link to='/weeklyposts'>Weekly</Link></li>
                </ul>
                {
                    routes.map((route, index)=>
                    <Route key={index} path ={route.path} component={route.main}/>
                    )
                }
            </div>
        </Router>
    )
}
export default Sidebar;
