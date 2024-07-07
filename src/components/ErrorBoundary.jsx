import React, { useState } from "react";

const ErrorBoundary = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    const handleComponentError = (error, info) => {
      console.error("Error caught by error boundary:", error);
      console.error("Error info:", info);
      setHasError(true);
    };

    window.addEventListener("error", handleComponentError);

    return () => {
      window.removeEventListener("error", handleComponentError);
    };
  }, []);

  if (hasError) {
    return fallback;
  }

  return children;
};

export default ErrorBoundary;
