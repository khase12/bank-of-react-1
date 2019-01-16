import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserProfile extends Component {
    state={
        balance:NaN
    }
    handleChange = (e)=>{
        let updatedBalance = this.state.balance
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        updatedBalance = value
        this.setState({balance:updatedBalance})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.getBalance(this.state.balance)
    }
    render(){
      const arr =  this.props.passWord.split("")
      const stars = arr.map((letter,i)=>{return <span key={i}>*</span>})
      
        return(
            <div>
                <Link to='/'> Home </Link>
                
                <h1>user profile</h1>
                <p>Name: {this.props.userName}</p>
                <p >Pass: {stars} </p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="balance">Enter Amount: </label>
                    <input type="number" name="balance" onChange={this.handleChange} value={this.state.balance} />
                    <button type="submit">Submit</button>
                </form>
                <h1>Balance: {this.props.accountBalance}</h1>
            </div>
        )
    }
}

export default UserProfile