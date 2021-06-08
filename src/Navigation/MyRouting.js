import React, { Component } from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from '../Home/Home'
import Withdraw from '../Withdraw/Withdraw'
import Profile from '../Profile/Profile'
import Earning from '../EarnHistory/EarnHistory'
import Users from '../Users/Users'
import Payment from '../Payment/Payment'
import PaidWithdraw from '../PaidWithdraw/PaidWithdraw'
import InstantWithdraw from '../InstantWithdraw/InstantWithdraw'
import VersionControl from '../AppUpdate/AppUpdate'

export default class MyRouting extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/withdraw" component={Withdraw}/>
                    <Route exact path="/profile/:userId" component={Profile}/>
                    <Route exact path="/earning" component={Earning}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route exact path="/pwithdraw" component={PaidWithdraw}/>
                    <Route exact path="/instant" component={InstantWithdraw}/>
                    <Route exact path="/version" component={VersionControl}/>
                </Switch>
            </div>
       
        )
    }
}
