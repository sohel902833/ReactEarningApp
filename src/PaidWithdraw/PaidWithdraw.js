import React, { Component } from 'react'
import classes from './css/paid.module.css'
import SinglePaid from './SinglePaid'
import {url} from '../Server.js'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class PaidWithdraw extends Component {
  
    constructor(){
        super()
        this.state={
            withdraws:[]
        }
    }

    componentDidMount=()=>{
        let hitUrl=`${url}withdraw/p`
        const token=`Bearer ${localStorage.getItem("token")}`;

        console.log(hitUrl)
        Axios.get(hitUrl, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
              console.log(res)
               this.setState({
                   withdraws:res.data.withdrawRequests
               })
          }).catch(err=>{
              console.log(err)
          }) 
    }


    render() {
        let {withdraws}=this.state
        if(!localStorage.getItem("token")){
            return(
                <Redirect to="/login"/>
            )
           }else{
        
        return (
            <div className={classes.withdrawContainer}>
                   {
                    withdraws.map(withdraw=>{
                        return <SinglePaid withdraw={withdraw}/>
                    })
                   }
            </div>
        )
    }
    }
}
