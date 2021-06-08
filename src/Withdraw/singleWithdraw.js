import classes from './css/withdraw.module.css'
import {Link} from 'react-router-dom'
import {url} from "../Server"
import Axios from 'axios'

export default function(props){

    let{accountNo,payment,coins,time,_id}=props.withdraw
    let link=`/profile/${props.withdraw.userId}`

    const deleteWithdraw=(id)=>{

        let hitUrl=`${url}withdraw/${id}`
        const token=`Bearer ${localStorage.getItem("token")}`;
            Axios.delete(hitUrl, {
                headers: {
                  'Authorization':token
                }
              }).then(res=>{
                if(res.status==200){
                  props.filterWithdraw(id);
                    alert("Deleted Successful")
                }
              }).catch(err=>{
                console.log(err.message);
              })

    }
    const paidWithdraw=(id)=>{

      console.log("click")

        let hitUrl=`${url}withdraw/p/${id}`
        console.log(hitUrl)
        const token=`Bearer ${localStorage.getItem("token")}`;
            Axios.post(hitUrl, {
                headers: {
                  'Authorization':token
                }
              }).then(res=>{
                if(res.status==200){
                  props.filterWithdraw(id);
                    alert(res.data.message)
                }
              }).catch(err=>{
                console.log(err.message);
              })

    }


    return(
       
            <div className={classes.singleWithdrawContainer}>
               <Link exact to={link}>
                 <h4>{"Payment Type: "+payment}</h4>
                <p>{"Account No : "+accountNo}</p>
                <h2>{"Coin : "+coins}</h2>
                <p>{"Time : "+time}</p>
                </Link>
                <button onClick={()=>{deleteWithdraw(_id)}}>Delete</button>
                <button onClick={()=>{paidWithdraw(_id)}}>Paid</button>
            </div>
     
    )
}