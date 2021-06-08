import React, { Component } from 'react'
import classes from './css/user.module.css'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import {url} from '../Server'


export default class Login extends Component {
    state={
        email:"",
        password:""
    }

    submitHandler=(event)=>{
        event.preventDefault()
     
        const hitUrl=`${url}admin/login`
        console.log(hitUrl)
        Axios.post(hitUrl,{email:this.state.email,password:this.state.password})
            .then(res=>{
                let {access_token}=res.data
                    if(access_token){
                        localStorage.setItem("token",access_token)
                        this.props.history.push('/')
                    }else{
                        alert(res.data.message)
                    }

            }).catch(err=>{
                console.log(err)
                alert(err.message)
            });
        
       

    }
    changeHandeler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {
        if(localStorage.getItem("token")){
            return(
                <Redirect to="/"/>
            )
        }else{
            return (
                <div className={classes.loginContainer}>
                    <div className={classes.loginHeader}>
                        <h1>
                            Login
                        </h1>
                    </div>
             
    
    
                    <form>
                      <input
                            type="email"
                            onChange={this.changeHandeler}   
                            value={this.state.email} 
                            placeholder="Write Your Email"
                            name="email"
                            /><br/>
                      <input
                            type="password"
                            onChange={this.changeHandeler}   
                            value={this.state.password} 
                            placeholder="Write Your Password"
                            name="password"
                            />
                         <div className={classes.submit}>
                                <input
                                type="submit"
                                onClick={this.submitHandler.bind(this)} 
                                value="Login"
                                />
                            </div>
                     
                    </form>
                </div>
           )
        }
    }
}
