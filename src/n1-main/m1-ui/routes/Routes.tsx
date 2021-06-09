import React from "react";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Registration from "../../../n2-features/f1-auth/a2-register/Registration";
import Profile from "../common/Profile";
import Error404 from "../common/Eror404";
import { Route, Switch, Redirect } from "react-router-dom";
import Start from "../common/Start";
import RecoveryPass from "../../../n2-features/f1-auth/a2-register/RecoveryPass";
import ChangePass from "../../../n2-features/f1-auth/a2-register/ChangePass";
import Allcomponents from "../common/Allcomponents";



export const PATH = {
    START: "/start",
    REDUX: "/redux",
    LOGIN: "/login",
    REGISTRATION: "/registration",
    RECPASS: "/recoveryPass",
    CHANGEPASS: "/changePass",
    ALLCOMP: "/allComponents",
    PRIFILE: "/profile",
}

function Routes() {
    return (
        <div>

          <Switch>
            <Route path={"/"} exact render={() => <Redirect to={PATH.START}/>}/>

            <Route path={PATH.START} render={() => <Start/>}/>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
            <Route path={PATH.RECPASS} render={() => <RecoveryPass/>}/>
            <Route path={PATH.CHANGEPASS} render={() => <ChangePass/>}/>
            <Route path={PATH.ALLCOMP} render={() => <Allcomponents/>}/>
            <Route path={PATH.PRIFILE} render={() => <Profile/>}/>

            <Route render={() => <Error404/>}/>

          </Switch>
        </div>
    );
}

export default Routes;
