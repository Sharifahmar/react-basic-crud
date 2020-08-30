
import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo: errorInfo
          })

        // You can also log the error to an error reporting service
        console.log(`error is ${error} and errorInfo is ${errorInfo.componentStack}`)

    }


    render() {
        if (this.state.errorInfo) {
            // You can render any custom fallback UI
            return (
                <div>
                <h1>Something went wrong.</h1>
                <br />
                <hr />
                <br />
                {this.state.errorInfo.componentStack}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary

