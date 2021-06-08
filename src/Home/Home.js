import React, { Component } from 'react'
import Axios from 'axios'
import {url} from '../Server'
import classes from './css/home.module.css'
import AppSetting from './AppSetting'
import {Redirect} from 'react-router-dom'
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }

    componentDidMount(){

    }


render() {
    if(!localStorage.getItem("token")){
        return(
            <Redirect to="/login"/>
        )
       }else{
        return (
            <div className={classes.homeContainer}>
                
               <div className={classes.settingContainer}>
                    <AppSetting/>
               </div>
            </div>
        )
       }
    }
}
