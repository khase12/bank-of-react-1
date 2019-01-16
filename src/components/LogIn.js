import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LogIn extends Component{
    state = {
        user:{
            userName:'',
            passWord:''
        },
        redirect:false
        
    }
    
    handleChange = (e)=>{        
        const updatedUser = {...this.state.user}
        console.log(updatedUser)
        const inputField = e.target.name
        const inputValue = e.target.value

        updatedUser[inputField] = inputValue
        this.setState({user:updatedUser})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogin(this.state.user)
        this.setState({redirect: true})
      }
    render(){
        if (this.state.redirect) {
            return (<Redirect to="/userProfile"/>)
          }
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>New User</h1>
            <div>
                <label htmlFor="">user Name:</label>
                <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
            </div>
            <div>
                <label htmlFor="">Pass Word:</label>
                <input type="password" name="passWord" onChange={this.handleChange} value={this.state.user.passWord}/>
            </div>
            <button type="submit">Log In</button>

            </form>
        )
    }
}
export default LogIn