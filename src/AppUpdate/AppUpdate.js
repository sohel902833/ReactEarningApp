import React, { Component } from 'react'
import classes from './update.module.css'
import {url} from '../Server'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class AppUpdate extends Component {

    state={
        version:[]
    }


    componentDidMount=()=>{
        let hitUrl=`${url}version`
        const token=`Bearer ${localStorage.getItem("token")}`;
       Axios.get(hitUrl, {
            headers: {
              'Authorization':token
            }
          }).then(res=>{
               this.setState({
                   version:res.data.version[0]
               })
          }).catch(err=>{
                alert("Error")
          }) 
    }
    updateApplicationVersion=()=>{
        let hitUrl=`${url}version`
        const token=`Bearer ${localStorage.getItem("token")}`;
     

            Axios.post(hitUrl,this.state.version, {
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
    versionNOCng=(e)=>{
        this.setState(prevState => {
            let version = { ...prevState.version};  
            version.versionNo=e.target.value;
            return { version };                    
          })
    }
    priorityCng=(e)=>{
        this.setState(prevState => {
            let version = { ...prevState.version};  
            version.priority=e.target.value;
            return { version };                    
          })
    }


    render() {
        let {version}=this.state
        if(!localStorage.getItem("token")){
          return(
              <Redirect to="/login"/>
          )
         }else{
            return (
            
                <div className={classes.updateContainer}>
                    <div>
                    <h1>Version No: </h1>
                    <input onChange={this.versionNOCng} type="Number" value={version?version.versionNo:""}/>
                    </div>
                    <div>
                    <h1>Alert Showing Priority: </h1>
                    <input onChange={this.priorityCng} type="Number" value={version?version.priority:""}/>
                    </div>
                    <button onClick={this.updateApplicationVersion}>Update Version</button>
                  
                </div>
            )
         }
    }
}
