import React from 'react'
import classes from './css/earn.module.css'

export default function UserList(props) {

    let {earningText,previousBalance,newBalance,time}=props.history

    return (
        <div className={classes.earningUserList}>
                <h3>{"Earn Form: "+earningText}</h3>
                <p className={classes.colorRed}>{"Previous Balance: "+previousBalance}</p>
                <p className={classes.colorGreen}>{"New Balance: "+newBalance}</p>
                <p className={classes.colorGreen}>{"Coin: "+(newBalance-previousBalance)}</p>
               
                <p>{"Time: "+time}</p>
        </div>
    )
}
