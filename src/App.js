
import { BrowserRouter, Route } from 'react-router-dom';
import MainComponent from './Start/MainComponent'
import Login from './Start/Login'
import Profile from './Profile/Profile'
import Users from './Users/Users';


function App() {
  return (
    <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={MainComponent}/>
        <Route exact path="/withdraw" component={MainComponent}/>
        <Route exact path="/pwithdraw" component={MainComponent}/>
        <Route exact path="/users" component={MainComponent}/>
        <Route exact path="/earning" component={MainComponent}/>
        <Route exact path="/profile/:userId" component={MainComponent}/>
        <Route exact path="/payment" component={MainComponent}/>
        <Route exact path="/instant" component={MainComponent}/>
        <Route exact path="/version" component={MainComponent}/>
    
        {/* <Route exact path="/message" component={Message}/>
        <Route exact path="/video" component={MainComponent}/>
        <Route exact path="/profile/:userId" component={MainComponent}/>
        <Route exact path="/friend" component={MainComponent}/> */}
    </BrowserRouter>
    
  );
}

export default App;
