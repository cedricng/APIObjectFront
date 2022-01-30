import React from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./Navbar.css";
import CreateObject from "../CreateObject/CreateObject";

const Navbar = () => {
  let user
  console.log(localStorage.getItem("token"));
  try{
  
  user=localStorage.getItem("user");//jwtDecode(token);
  console.log(user);  
  }catch(err){

  }
  return (
    <nav>
      <ul className="list">
        <li className="item">
          <NavLink className="link" to="/home">
            Home
          </NavLink>
        </li>

        {!user ? 
          <React.Fragment>
            <li className="item">
              <NavLink className="link" to="/login">
                LogIn
              </NavLink>
            </li>
            <li className="item">
              <NavLink className="link" to="/signup">
                SignUp
              </NavLink>
            </li>
          </React.Fragment>
        :null
      }
        <li className="item">
          {user?user:null}
        </li>
      {user?
        <React.Fragment> 
          <li className="item">
            <NavLink className='link' to='/logout'>Logout</NavLink>
          </li>
          <li className="item">
            <NavLink className='link' to='/create'>Create an object</NavLink>
          </li>
        </React.Fragment> 
        :null
      }
      </ul>
    </nav>
  );
};

export default Navbar;
