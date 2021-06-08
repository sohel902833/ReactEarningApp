import React, { Component } from 'react'
import classes from './css/earn.module.css'
import EarningList from './EarningList'
import {url} from '../Server'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class EarnHistory extends Component {
   
    constructor(){
        super()
        this.state={
            history:[]
        }
    }

    componentDidMount=()=>{
        let hitUrl=`${url}admin/history`
        const token=`Bearer ${localStorage.getItem("token")}`;
       Axios.get(hitUrl, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
              console.log(res)
               this.setState({
                   history:res.data.earningHistory
               })
          }).catch(err=>{
              console.log(err)
          }) 
    }
    
    render() {
        let {history}=this.state
        if(!localStorage.getItem("token")){
            return(
                <Redirect to="/login"/>
            )
           }else{
             return (
                <div className={classes.earnContainer}>
                
                    {
                        history.map(his=>{
                            return <EarningList history={his}/>
                        })
                    }
            
                </div>
            )       
         }
    }
}
