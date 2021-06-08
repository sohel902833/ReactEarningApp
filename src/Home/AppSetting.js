import React, { Component } from 'react'
import classes from './css/home.module.css'
import {url} from '../Server'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class AppSetting extends Component {

    state={
        setting:[]
    }
    componentDidMount=()=>{
        let hitUrl=`${url}admin/setting`
        const token=`Bearer ${localStorage.getItem("token")}`;
        Axios.get(hitUrl, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
              this.setState({
                   setting:res.data.setting[0]
               })
          }).catch(err=>{
              console.log(err)
          }) 
    }

    coinChange=(e,input)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.coinValue = e.target.value                               
            return { setting };                    
          })
    }
    firstCapCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.firstCaptchaDelayTime=e.target.value;                            
            return { setting };                    
          })
    }
    secondCapCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.secondCaptchaDelayTime=e.target.value;
            return { setting };                    
          })
    }
    thirdCapCng=(e)=>{

        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.thirdCaptchaDelayTime=e.target.value;
             return { setting };                    
          })
    }
    watchCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.watchDelayTime=e.target.value;
            return { setting };                    
          })
      
    }
    cap1Cng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.cap1=e.target.value;
            return { setting };                    
          })
      
    }
    cap2Cng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.cap2=e.target.value;
            return { setting };                    
          })
     
    }
    cap3Cng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.cap3=e.target.value;
             return { setting };                    
          })
       
    }
    cap4Cng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.cap4=e.target.value;
             return { setting };                    
          })
       
    }
    wCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.minW=e.target.value;
            return { setting };                    
          })
    }
    referCng=(e)=>{

        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.refer=e.target.value;
            return { setting };                    
          })
    }
    regCoinCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.regCoin=e.target.value;
            return { setting };                    
          })
    }
    fourthCapCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.fourthCaptchaDelayTime=e.target.value;
            return { setting };                    
          })
    }
    bkashCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.bkash=e.target.value;
            return { setting };                    
          })
    }
    paytmCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.paytm=e.target.value;
            return { setting };                    
          })
    }
    offerCng=(e)=>{
        this.setState(prevState => {
            let setting = { ...prevState.setting};  
            setting.offer=e.target.value;
            return { setting };                    
          })
    }

    submitValue=()=>{
        let hitUrl=`${url}admin/setting`
        let setting=this.state.setting;
        const token=`Bearer ${localStorage.getItem("token")}`;
        Axios.post(hitUrl,setting, {
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

        let {setting}=this.state?this.state:"";
        if(!localStorage.getItem("token")){
          return(
              <Redirect to="/login"/>
          )
         }else{
            return (
                <div className={classes.appSettingContainer}>
                      <h1>Application Setting: </h1>  
                      <div className={classes.settingItem}>
                        <input
                            name="coinValue"
                            onChange={this.coinChange}
                            type="number"
                            value={setting?setting.coinValue:""}
                            />
                        <p>Coin=1$</p>
                      </div>
                      <h3>Registration Get Coin: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.regCoinCng}
                            type="number"
                            value={setting?setting.regCoin:""}
                            />
                      </div>
                      
                      <h3>Captcha 1 Delay Time: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.firstCapCng}
                            type="number"
                            value={setting?setting.firstCaptchaDelayTime:""}
                            />
                      </div>
                      <h3>Captcha 2 Delay Time: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.secondCapCng}
                            type="number"
                            value={setting?setting.secondCaptchaDelayTime:""}
                            />
                      </div>
                      <h3>Captcha 3 Delay Time: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.thirdCapCng}
                            type="number"
                            value={setting?setting.thirdCaptchaDelayTime:""}
                            />
                      </div>
                      <h3>Captcha 4 Delay Time: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.fourthCapCng}
                            type="number"
                            value={setting?setting.fourthCaptchaDelayTime:""}
                            />
                      </div>
                      <h3>Watch Delay Time: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.watchCng}
                            type="number"
                            value={setting?setting.watchDelayTime:""}
                            />
                      </div>
                      <h3>Captcha 1 Wining Coin: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.cap1Cng}
                            type="number"
                            value={setting?setting.cap1:""}
                            />
                      </div>
                      <h3>Captcha 2 Wining Coin: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.cap2Cng}
                            type="number"
                            value={setting?setting.cap2:""}
                            />
                      </div>
                      <h3>Captcha 3 & Watch Wining Coin: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.cap3Cng}
                            type="number"
                            value={setting?setting.cap3:""}
                            />
                      </div>
                      <h3>Captcha 4 Wining Coin: </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.cap4Cng}
                            type="number"
                            value={setting?setting.cap4:""}
                            />
                      </div>
                      <h3>Min Withdraw Coin </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.wCng}
                            type="number"
                            value={setting?setting.minW:""}
                            />
                      </div>
                      <h3>Refer Coin </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.referCng}
                            type="number"
                            value={setting?setting.refer:""}
                            />
                      </div>
                      <h3>Offer Coin </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.offerCng}
                            type="number"
                            value={setting?setting.offer:""}
                            />
                      </div>
                      <h3>Bkash Instant Get Coin Total </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.bkashCng}
                            type="number"
                            value={setting?setting.bkash:""}
                            />
                      </div>
                      <h3>Paytm Instant Get Coin Total </h3>
                      <div className={classes.settingItem}>
                        <input
                            name="firstCaptchaDelayTime"
                            onChange={this.paytmCng}
                            type="number"
                            value={setting?setting.paytm:""}
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
