// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error("Error caught by boundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-50">
					<div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
						<div className="text-center">
							<div className="text-red-500 text-6xl mb-4">⚠️</div>
							<h1 className="text-2xl font-bold text-gray-900 mb-4">
								Something went wrong
							</h1>
							<p className="text-gray-600 mb-6">
								We're sorry, but something unexpected happened.
								Please try refreshing the page.
							</p>
							<button
								onClick={() => window.location.reload()}
								className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
								Refresh Page
							</button>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
