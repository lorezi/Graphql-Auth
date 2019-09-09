import React, { Component } from 'react';
import {Router, hashHistory, Route, IndexRoute} from 'react-router'


import AuthForm from './AuthForm';
import Header from './Header';
import { graphql } from 'react-apollo'

import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';



class LoginForm extends Component {


    state = {
        errors: []
    }
    

    componentWillUpdate(nextProps) {
        // this.props // the old, current set of props
        // nextProps // the next set of props, the new props
        // console.log(`Old props, current set of props ${this.props}`);
        // console.log(this.props, nextProps)
        (!this.props.data.user && nextProps.data.user) && (hashHistory.push('/dashboard'))

    }
    
    onSubmit = ({email, password}) => {
        this.props.mutate({
            variables     : {email, password},
            refetchQueries: [{query}]
        })
        .catch(res => { 
            const errors = res.graphQLErrors.map(error => error.message )
            this.setState({errors})
        })
    }

    render() {
        return (
            <div className="container">
            <Header/>
            <h5>Login</h5>
                <AuthForm
                errors   = {this.state.errors}
                onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

export default graphql(query)(
graphql(mutation)(LoginForm));