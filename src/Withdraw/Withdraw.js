import React, { Component } from 'react'
import classes from './css/withdraw.module.css'
import SingleWithdraw from './singleWithdraw'

import {url} from '../Server.js'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class Withdraw extends Component {
  
    constructor(){
        super()
        this.state={
            withdraws:[]
        }
    }

    componentDidMount=()=>{
        let hitUrl=`${url}withdraw/`
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
    

    filterNewWithdraw=(id)=>{
       
        let newWithdraws = this.state.withdraws.filter(withdraw => {
            return withdraw._id != id;
        })

        this.setState({
            withdraws: newWithdraws
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
                        return <SingleWithdraw withdraw={withdraw} filterWithdraw={this.filterNewWithdraw}/>
                    })
                   }
            </div>
        )
     }
    }
}
