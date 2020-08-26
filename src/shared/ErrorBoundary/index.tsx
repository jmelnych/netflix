import React, { Component } from 'react';

type ErrorBoundaryProps = {
    children: any
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = { hasError: false };

    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch() {
      this.setState({ hasError: true });
      // eslint-disable-next-line no-console
      console.log('error');
    }

    render() {
      const { hasError } = this.state;
      const { children } = this.props;
      if (hasError) {
        return <h1>Something went wrong.</h1>;
      }

      return children;
    }
}
export default ErrorBoundary;
