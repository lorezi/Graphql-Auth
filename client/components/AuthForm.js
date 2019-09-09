import React, { Component } from 'react';

class AuthForm extends Component {

    state = {
        email   : '',
        password: '',
    }

    handleSubmit = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()

        const {email, password} = this.state
        this.props.onSubmit({email, password})
    }


    
    render() {
        const {email, password} = this.state
        return (
            <div className="row">
           <form className="col s4" onSubmit={this.onSubmit}>

           <div className="input-field">
           <input 
           name        = "email"
           placeholder = "Email"
           type        = "text"
           value       = {email}
           onChange    = {this.handleSubmit}
           />
           </div>
           
           <div className="input-field">
           <input
           name        = "password"
           placeholder = "Password"
           type        = "password"
           value       = {password}
           onChange    = {this.handleSubmit}
           />
           </div>

           {this.props.errors.map(error => <div className="errors" key={error}>{error}</div>)}

           

           <button className="btn">Submit</button>
           </form>
            </div>
           
        );
    }
}

export default AuthForm;