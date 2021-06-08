import React, { Component } from 'react'
import classes from './css/profile.module.css'
import profile from '../Image/profile.png'
import EarningList from './EarningList'
import {url} from '../Server'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'


export default class Profile extends Component {

    constructor({match}){
        super()
        this.state={
            userId:match.params.userId,
            user:{},
            earnings:[]
        }
    }

    componentDidMount=()=>{
        let {userId}=this.state
        try{
            let hitUrl=`${url}user/${userId}`
            let hitUrl2=`${url}admin/history/${userId}`
            const token=`Bearer ${localStorage.getItem("token")}`;
         
            Axios.get(hitUrl, {
                headers: {
                  'Authorization':token
                }
              }).then(res=>{
                this.setState({
                    user:res.data.users,
                  })
              }).catch(err=>{
                console.log(err.message);
              })

            Axios.get(hitUrl2,{
                headers: {
                    'Authorization':token
                  }
            }).then(res=>{
                this.setState({
                    earnings:res.data.earningHistory
                  })
            }).catch(err=>{
                console.log(err.message);    
            })

           
        }catch(err){
            console.log(err.message);
        }
      



    }



    render() {
       
       let {name,phone}=this.state.user
       let {earnings}=this.state
       let imgSrc=this.state.user.profileImage==="none"?profile:this.state.user.profileImage;
       if(!localStorage.getItem("token")){
        return(
            <Redirect to="/login"/>
        )
        }else{
                return (
                    <div className={classes.profileContainer}>
                            <div className={classes.profileTop}>
                                <img src={imgSrc} placeholder="not found"/>
                                <h1>{"Name: "+name}</h1>
                                <p>{"Phone: "+phone}</p>
                            </div>
                            <div className={classes.profileBottom}>
                                {
                                    earnings.map(earning=>{
                                        return <EarningList earning={earning}/>
                                    })
                                }

                            </div>
                    </div>
                )
        }
    }
}
