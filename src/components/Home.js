import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    render(){
        return (
            <div>
                <img src="https://www.pngrepo.com/download/55407/bank-building-silhouette.png" alt="bank"/>
              <h1>Bank of React</h1>
              <Link to="/login">Log In User</Link>
            </div>
            
        )
    }
}
export default Home