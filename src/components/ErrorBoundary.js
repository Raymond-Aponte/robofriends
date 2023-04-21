import React, { Component } from 'react';

class ErrorBoundary extends Component {
	// Allow access to this.props
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// This lifecycle hook will run if anything
	// errors out
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		// If there is an error, return default state
		if (this.state.hasError) {
			return <h1>Ooops. That is not good</h1>;
		}
		// Anything wrapped in ErrorBoundary
		return this.props.children;
	}
}

export default ErrorBoundary;