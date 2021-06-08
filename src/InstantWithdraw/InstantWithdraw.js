import React, { Component } from 'react'
import {url} from '../Server'
import Axios from 'axios'
import classes from './instant.module.css'
import SingleWithdraw from '../Withdraw/singleWithdraw'
import {Redirect} from 'react-router-dom'


export default class InstantWithdraw extends Component {

    constructor(){
        super()
        this.state={
            withdraws:[]
        }
    }

    componentDidMount=()=>{
        let hitUrl=`${url}instant/`
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
