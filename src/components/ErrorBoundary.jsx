import React, { useState } from "react";

const ErrorBoundary = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  // useEffect as componentDidCatch equivalent for functional components
  React.useEffect(() => {
    const handleComponentError = (error, info) => {
      console.error("Error caught by error boundary:", error);
      console.error("Error info:", info);
      setHasError(true);
      // Additional error handling logic can be added here
    };

    // Assign the error handler to the window to catch unhandled promise rejections
    window.addEventListener("error", handleComponentError);

    return () => {
      window.removeEventListener("error", handleComponentError);
    };
  }, []);

  if (hasError) {
    return fallback; // Render the fallback UI when an error occurs
  }

  return children; // Render the children normally when no error occurs
};

export default ErrorBoundary;
