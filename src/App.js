import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
class App extends Component {
  
  state = {
    accountBalance: 0,
    currentUser: {
      userName: "Stan",
      passWord: "yolo"
    }
  };
  mockLogin = (userInfor) => {
    this.setState({ currentUser: userInfor });
  };
  getBalance = (bal)=>{
    this.setState({accountBalance:bal})
  }
  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
      getBalance ={this.getBalance}
      accountBalance = {this.state.accountBalance}
        userName={this.state.currentUser.userName}
        passWord={this.state.currentUser.passWord}
        date={this.state.accountBalance}
      />
    );
    const LogInComponent = () => (
      <LogIn
        user={this.props.currentUser}
        mockLogin={this.mockLogin}
        {...this.props}
      />
    );
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userprofile" render={UserProfileComponent} />
          <Route path="/login" render={LogInComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
