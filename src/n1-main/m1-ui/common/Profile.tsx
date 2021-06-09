import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from "../../m2-bll/store"
import {reduxAC1} from "../../m2-bll//reduxReducer1"
import {reduxAC2} from "../../m2-bll//reduxReducer2"
import {initStateType} from "../../m2-bll//reduxReducer1"
import './App.css';


function Profile() {

    const store1=useSelector<AppStoreType,initStateType>(state=>state.reduxStore1)
    const store2=useSelector<AppStoreType,initStateType>(state=>state.reduxStore2)
    const dispatch=useDispatch()

    const clickHandler1=()=>{
        dispatch(reduxAC1("card1"))
    }

    const clickHandler2=()=>{
        dispatch(reduxAC2("card"))
    }

        return (
            <div className="App">
                    Redux change data
                    <br/>
                    {store1.value}
                    <button onClick={clickHandler1}>click1</button>
                    <br/>
                    {store2.value}
                    <button onClick={clickHandler2}>click2</button>

            </div>
        );
    }


export default Profile;
