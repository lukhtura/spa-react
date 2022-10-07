//Core
import { Component } from "react";

//Styles
import './ErrorBoundary.css'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    };

    static getDerivedStateFromError(error) {
        return { hasError: true }
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        return hasError 
        ? (<div><span className="error-text">Oops! Something went wrong...</span></div>)
        : children;
    };
};

export default ErrorBoundary;