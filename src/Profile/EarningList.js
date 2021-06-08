import React from 'react'
import classes from './css/profile.module.css'


export default function EarningList(props) {
    console.log("Here")
    let{earningText,previousBalance,newBalance,time}=props.earning
    console.log(props)
    return (
        <div className={classes.earningContainer}>
                <h3>{"Earn Form: "+earningText}</h3>
                <p className={classes.colorRed}>{"Previous Balance: "+previousBalance}</p>
                <p className={classes.colorGreen}>{"New Balance: "+newBalance}</p>
                <p className={classes.colorGreen}>{"Coin: "+(newBalance-previousBalance)}</p>
                <p>{"Time: "+time}</p>
        </div>
    )
}
