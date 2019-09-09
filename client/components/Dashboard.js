import React, { Component } from 'react';
import Header from './Header'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
            <Header/>
                <p>Dashboard</p>
                <p>You are logged in</p>
            </div>
        );
    }
}

export default Dashboard;