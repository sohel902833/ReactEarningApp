import React, { Component } from 'react'
import Axios from 'axios'
import {url} from '../Server'
import classes from './user.module.css'
import SingleUser from '../Users/SingleUser'
import { getDefaultNormalizer } from '@testing-library/react'
import {Redirect} from 'react-router-dom'

export default class Users extends Component {

    state={
       users:[]
    }

    componentDidMount=()=>{

        const hitUrl=`${url}user/`
        const token=`Bearer ${localStorage.getItem("token")}`;
        Axios.get(hitUrl, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
            this.setState({
                users:res.data.users
            })

          }).catch(err=>{
              alert(err.message)
          })

    }



render() {
    let {users}=this.state
    if(!localStorage.getItem("token")){
        return(
            <Redirect to="/login"/>
        )
       }else{
        return (
            <div className={classes.homeContainer}>
                {
                   users.map(user=>{
                       return <SingleUser  user={user}/>
                   }) 
                }
            </div>
        )
     }
    }
}
