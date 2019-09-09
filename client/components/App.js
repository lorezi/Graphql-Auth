import React, { Component } from 'react';
import Header from './Header';

class App extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        const {children} = this.props
        return (
           
            <div className="container">
            <Header/>
                <p>Main Contents</p>
                {children}
            </div>     
           
        );
    }
}

export default App;