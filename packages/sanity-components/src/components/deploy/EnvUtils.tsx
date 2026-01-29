/**
 * Environment Detection Utilities
 * Helper functions to determine if we're in development mode
 */

/**
 * Check if running in local development
 * @returns true if in development, false otherwise
 */
export const isDevelopment = (): boolean => {
  // Check for localhost
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
  }
  
  // Fallback to NODE_ENV if available
  return process.env.NODE_ENV === 'development';
};

/**
 * Check if running in production
 * @returns true if in production, false otherwise
 */
export const isProduction = (): boolean => {
  return !isDevelopment();
};

/**
 * Conditionally render component only in development
 * Usage: withDevOnly(MyComponent)
 */
export const withDevOnly = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    if (!isDevelopment()) {
      return null;
    }
    return <Component {...props} />;
  };
};

/**
 * Conditionally render component only in production
 * Usage: withProdOnly(MyComponent)
 */
export const withProdOnly = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    if (!isProduction()) {
      return null;
    }
    return <Component {...props} />;
  };
};