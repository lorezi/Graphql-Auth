import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'

import Header from './Header'
import AuthForm from './AuthForm'
import mutation from '../mutations/Signup'
import query from '../queries/CurrentUser'

export class SignupForm extends Component {

    state = {
        errors: []
    }

    componentWillUpdate(nextProps){
        (!this.props.data.user && nextProps.data.user) && (hashHistory.push('/dashboard'))
    }

    onSubmit = ({email, password}) => {
        this.props.mutate({
            variables     : {email, password},
            refetchQueries: [{query}]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        })
    }

    render() {
        return (
            <div className="container">
            <Header/>
            <h5>Sign Up</h5>
            <AuthForm
            errors   = {this.state.errors}
            onSubmit = {this.onSubmit}
            />    
            </div>
        );
    } 
}

export default graphql(query)(
graphql(mutation)(SignupForm));
