import React, { Component } from 'react'
import classes from './css/payment.module.css'
import {url} from '../Server'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class Payment extends Component {


    state={
        payment:[]
    }
    componentDidMount=()=>{
        let hitUrl=`${url}admin/payment`
        const token=`Bearer ${localStorage.getItem("token")}`;
        Axios.get(hitUrl, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
              this.setState({
                   payment:res.data.payment[0]
               })
          }).catch(err=>{
              console.log(err)
          }) 
    }
    bkashCng=(e)=>{

        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.bkash = e.target.value                               
            return { payment };                    
          })
    }
    paytmCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.paytm = e.target.value                               
            return { payment };                    
          })
    }
    amazonCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.amazon = e.target.value                               
            return { payment };                    
          })
    }
    jazzCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.jazz = e.target.value                               
            return { payment };                    
          })
    }
    gcashCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.gcash = e.target.value                               
            return { payment };                    
          })
    }
  
    payonerCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.payoner = e.target.value                               
            return { payment };                    
          })
    }
    playstoreCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.playstore = e.target.value                               
            return { payment };                    
          })
    }
    paypalCng=(e)=>{
        this.setState(prevState => {
            let payment = { ...prevState.payment};  
            payment.paypal = e.target.value                               
            return { payment };                    
          })
    }

    submitValue=()=>{
        let hitUrl=`${url}admin/payment`
        let payment=this.state.payment;
        const token=`Bearer ${localStorage.getItem("token")}`;
        Axios.post(hitUrl,payment, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
             alert(res.data.message)
          }).catch(err=>{
              console.log(err)
          })   
    }


    render() {
        let {payment}=this.state
        if(!localStorage.getItem("token")){
          return(
              <Redirect to="/login"/>
          )
         }else{
            return (
                <div className={classes.paymentSettingContainer}>
                <h1>Payment Setting: </h1>  
                <h3>Bkash: </h3>
                <div className={classes.settingItem}>
                  <input
                      onChange={this.bkashCng}
                      type="number"
                      value={payment?payment.bkash:""}
                      />
                </div>
                <h3>Paytm: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.paytmCng}
                      type="number"
                      value={payment?payment.paytm:""}
                      />
                </div>
                <h3>Amazon: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.amazonCng}
                      type="number"
                      value={payment?payment.amazon:""}
                      />
                </div>
                <h3>GCash: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.gcashCng}
                      type="number"
                      value={payment?payment.gcash:""}
                      />
                </div>
                <h3>Jazz: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.jazzCng}
                      type="number"
                      value={payment?payment.jazz:""}
                      />
                </div>
                <h3>Payoner: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.payonerCng}
                      type="number"
                      value={payment?payment.payoner:""}
                      />
                </div>
                <h3>PlayStore: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.playstoreCng}
                      type="number"
                      value={payment?payment.playstore:""}
                      />
                </div>
                <h3>Paypal: </h3>
                <div className={classes.settingItem}>
                  <input
                    onChange={this.paypalCng}
                      type="number"
                      value={payment?payment.paypal:""}
                      />
                </div>
              
                <button 
                onClick={this.submitValue}
                className={classes.updateButton}
                >Update</button>
          </div>
            )
         }
    }
}
