import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow-md">
          ⚠ Oops! Something went wrong here.
        </div>
      );
    }
    return this.props.children;
  }
}


function BuggyComponent() {
  throw new Error("Component crashed!");
}


function SafeComponent() {
  return (
    <div className="bg-green-100 text-green-700 p-4 rounded-lg shadow-md">
       This component works perfectly fine!
    </div>
  );
}


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 gap-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        React Error Boundaries
      </h1>

      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>


      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
