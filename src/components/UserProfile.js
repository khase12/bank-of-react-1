import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';
class UserProfile extends Component {
    state={
        balance:0
    }
    render(){
      const arr =  this.props.passWord.split("")
      const stars = arr.map(letter=>{return <span>*</span>})
        return(
            <div>
                <Link to='/'> Home </Link>
                <h1>user profile</h1>
                <p>Name: {this.props.userName}</p>
                <p >Pass: {stars} </p>
                <form>
                    <label htmlFor="balance">Enter Amount: </label>
                    <input type="text" name="balance" />
                    <button type="submit">Submit</button>
                </form>
                <AccountBalance />
            </div>
        )
    }
}

export default UserProfile