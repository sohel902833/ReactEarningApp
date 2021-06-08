import classes from './user.module.css'
import profile from '../Image/profile.png'
import {Link} from 'react-router-dom'
import {url} from '../Server'
import Axios from 'axios'
import React, { Component } from 'react'

export default class SingleUser extends Component {


    state={
        user:this.props.user
    }
    coinCng=(e)=>{
        this.setState(prevState => {
            let user = { ...prevState.user};  
            user.coins=e.target.value;
            return { user };                    
          })
    }

    updateCoin=(id)=>{

        let hitUrl=`${url}user/edit/${id}`
        const token=`Bearer ${localStorage.getItem("token")}`;
            Axios.put(hitUrl,{coins:this.state.user.coins}, {
                headers: {
                  'Authorization':token
                }
              }).then(res=>{
                if(res.status==200){
                 
                    alert("Updated Successful")
                }
              }).catch(err=>{
                console.log(err.message);
              })

    }

    render() {
        let {name,phone,email,profileImage,coins,_id}=this.props.user
        let link=`/profile/${_id}`
        let imageSrc=profileImage==="none"?profile:profileImage;
        return(
            <div className={classes.userContainer}>
                <div className={classes.userContainerLeft}>
                    <img src={imageSrc}
                        onError={profile}
                    placeholder="not found" />
                </div>
                <div className={classes.userContainerRight}>
                     <Link exact to={link}>
                         <h2>{"Name: "+name}</h2>
                       </Link>
                        <p>{"Phone: "+phone}</p>
                        <p>{"Email: "+email}</p>
                        <input type="Number"
                            onChange={this.coinCng}
                            value={
                                this.state.user.coins
                            }
                        />
                        <button onClick={()=>this.updateCoin(_id)}>Update Coin</button>
                        
                </div>
    
            </div>
    
        )
    }
}
