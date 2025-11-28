import React from 'react';

const ProtectedRoute = ({ children }) => {
  // for now, allow all
  return <>{children}</>;
};

export default ProtectedRoute;
