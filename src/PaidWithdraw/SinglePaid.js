import classes from './css/paid.module.css'
import {Link} from 'react-router-dom'
import {url} from "../Server"
import Axios from 'axios'

export default function(props){

    let{accountNo,payment,coins,time,_id,state}=props.withdraw
    let link=`/profile/${props.withdraw.userId}`

  

  


    return(
       
            <div className={classes.singleWithdrawContainer}>
               <Link exact to={link}>
                 <h4>{"Payment Type: "+payment}</h4>
                <p>{"Account No : "+accountNo}</p>
                <h2>{"Coin : "+coins}</h2>
                <h2>{"State : "+state}</h2>
                <p>{"Time : "+time}</p>
        
                </Link>
            </div>
     
    )
}