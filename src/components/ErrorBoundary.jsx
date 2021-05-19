import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        // If any error occur then this method will be triggered
        this.setState({
            hasError: true
        })
    }

    render() { 
        if (this.state.hasError) {
            return <h1>Ooopps. That is not good.</h1>
        }
        return this.props.children;
    }
}
 
export default ErrorBoundary;