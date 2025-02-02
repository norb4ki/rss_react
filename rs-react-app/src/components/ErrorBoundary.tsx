import React, { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('Error info:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
