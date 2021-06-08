import React, { Component } from 'react'
import classes from './css/main.module.css'
import { BrowserRouter, Redirect } from 'react-router-dom';
import MyRouting from '../Navigation/MyRouting'
import {NavLink} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
export default class MainComponent extends Component {
    
    render() {
        if(!localStorage.getItem("token")){
            return(
                <Redirect to="/login"/>
            )
           }else{
            return (
                <BrowserRouter>
                    <div className={classes.mainContainer}>
                        <div className={classes.containerTop}>
                            <div>
                                <NavLink activeStyle={{color:"#fff"}} className={classes.navItem} exact to='/'>Home</NavLink>
                             </div>   
                             <div>
                                <NavLink activeStyle={{color:"#fff"}} className={classes.navItem} exact to='/withdraw'>Withdraw</NavLink>
                            </div>   
                            <div>
                                <NavLink  activeStyle={{color:"#fff"}} className={classes.navItem} exact to='/users'>Users</NavLink>
                            </div>   
                        </div>
                        <div className={classes.containerBottom}>
                            <div className={classes.bottomLeft}>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/">
                                            <div className={classes.item1}>
                                                <h4>Home</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/users">
                                            <div className={classes.item1}>
                                                <h4>Users</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/earning">
                                            <div className={classes.item3}>
                                                <h4>Earning History</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/withdraw">
                                            <div className={classes.item3}>
                                                <h4>Withdraw Request</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/instant">
                                            <div className={classes.item3}>
                                                <h4>Instant Withdraw</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/pwithdraw">
                                            <div className={classes.item3}>
                                                <h4>Paid Withdraw</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/payment">
                                            <div className={classes.item3}>
                                                <h4>Payment Setting</h4>
                                            </div>
                                        </NavLink>
                                        <NavLink className={classes.navItem}  activeStyle={{color:"#015206",textDecoration:"none"}} exact to="/version">
                                            <div className={classes.item3}>
                                                <h4>Version Control</h4>
                                            </div>
                                        </NavLink>
                            </div>
                            <div className={classes.bottomRight}>
                            <MyRouting/>
                            </div>
                        </div>  
                    </div>
                </BrowserRouter>
            )
           }
      
    }
}
