import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';


class Home extends Component {
    render(){
        return (
            <div>
                <img src="https://www.pngrepo.com/download/55407/bank-building-silhouette.png" alt="bank"/>
              <h1>Bank of React</h1>
              <Link to="/userProfile">User Profile</Link>
              <Link to="/login">Log In User</Link>
              <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
            
        )
    }
}
export default Home