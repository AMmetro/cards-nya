import React from 'react';
import {NavLink} from "react-router-dom";


function Header() {

  return (
    <div className="App">

        <NavLink to="login">Login</NavLink> &nbsp;
        <NavLink to="registration">Registration</NavLink> &nbsp;
        <NavLink to="recoveryPass">RecoveryPass</NavLink> &nbsp;
        <NavLink to="changePass">ChangePass</NavLink> &nbsp;
        <NavLink to="allComponents">AllComponents</NavLink> &nbsp;
        <NavLink to="profile">Profile</NavLink>  <br/>

    </div>
  );
}

export default Header;
